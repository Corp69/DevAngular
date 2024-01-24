import { Component, OnInit } from '@angular/core';
import { MdlCliente } from './models/MdlCliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from './Services/Cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  //==============================================================================================================
  //Modales:
  public visible: boolean = false;
  public dlgRegimenvisible: boolean = false;
  public dlgDocCbrovisible: boolean = false;
  //==============================================================================================================
  public showDialog = () => { this.visible = true; }
  public dlgRegimen = () => { this.dlgRegimenvisible = true; }
  public dlgDocCbro = () => { this.dlgDocCbrovisible = true; }
  public closeDialog = () => { this.visible = false; }
  //==============================================================================================================
  // Modal: mensaje Confirmacion 
  public visibleMjs: boolean = false;
  // variables para mensaje actualizar guardar 
  public msjBody: any = { msjTipo: 1, titulo: '', mensaje: '', detalle: '' };

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;

  public tablaSat3: String = 'sat_doc_cobro';
  public SatCobroCFDI = ''

  //==============================================================================================================
  // Tabla sat al Componente:
  public tabalaSat1: String = 'sat_usocfdi';
  public usoCFDI = ''

  public tabalaSat2: String = 'sat_regimenfiscal';
  public RegimenCFDI = ''

  //==============================================================================================================
  // Listados:
  public lstestatus: any;
  public lstClienteTipo: any;

  //==============================================================================================================
  //modelos:
  public MdlCliente: MdlCliente = new MdlCliente();
  //==============================================================================================================
  //Formularios del app:
  public frmCliente: FormGroup = this.fb.group({
    id: [-1],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    rfc: [,    [Validators.required, Validators.minLength(3)]],
    codigo: [],
    curp: [],
    correo: [],
    observaciones: [],
    logo: [""],

    id_cliente_domicilio: [],
    id_cliente_estatus:   [1],
    id_cliente_tipo:      [1],
    id_sat_regimenfiscal:   [],
    id_sat_usocfdi:   [],
  });
 

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private servicio: ClienteService
    //private datePipe: DatePipe,
  ) {
    this.route.params.subscribe(params => {
      if (+params['id'] > -1) {
        // AGREGAMOS LA INFORMACION AL FORMULARIO
        this.servicio.Datainfo(+params['id']).subscribe(resp => {
          this.frmCliente.setValue(resp.Detalle);
        });
        //CARGAMOS CFDI
        this.servicio.Datacfdi(+params['id']).subscribe(resp => {
          // rellenamos los campos de CFDI EN UNA CONSULTA APARTE  
          this.frmCliente.controls['id_sat_regimenfiscal'].setValue(parseInt(resp.Detalle.clientecfdi.id_sat_regimenfiscal));
          this.frmCliente.controls['id_sat_regimenfiscal'].setValue(parseInt(resp.Detalle.clientecfdi.id_sat_usocfdi));
          this.usoCFDI     = resp.Detalle.clientecfdi.usocfdi;
          this.RegimenCFDI = resp.Detalle.clientecfdi.regimen;
        });
      }
    });
  }

  ngOnInit() {
    //=========================================================================================================================
    //carga listados
    this.servicio.listClienteTipo().subscribe(resp => { this.lstClienteTipo = resp.Detalle; });
    this.servicio.listClienteEstatus().subscribe(resp => { this.lstestatus  = resp.Detalle; });
    //this.servicio.listProveedorOperacion().subscribe(resp => {this.lstProovedorOperacion = resp.Detalle;});
    //this.servicio.listProveedorClasificacion().subscribe(resp => {this.lstProveedorClasificacion = resp.Detalle;});
    //=========================================================================================================================
  }

  //==============================================================================================================
  // Crud Para Clientes:
  public Almacenar = () => {
    this.BtnSpinner = true;
    //===============================
    this.servicio.Almacenar(this.frmCliente.value).subscribe(resp => {
        console.log(resp.Detalle)
      switch (resp.Detalle) {
        case null:
          this.visibleMjs = true;
          //============================================================
          this.msjBody.msjTipo = 3;
          this.msjBody.titulo = 'Modulo Servicio: Developer®';
          this.msjBody.mensaje = 'La consulta de manera exitosa !';
          this.msjBody.detalle = 'Web Service Esta Fallando';
          break;
        case undefined:
          this.visibleMjs = true;
          //============================================================
          this.msjBody.msjTipo = 3;
          this.msjBody.titulo = 'Modulo Servicio: Developer®';
          this.msjBody.mensaje = 'La consulta de manera exitosa !';
          this.msjBody.detalle = 'Web Service Esta Fallando';
          break;
        default:
          this.visibleMjs = true;
          this.msjBody.msjTipo = 1;
          //============================================================
          this.msjBody.titulo = resp.Titulo;
          this.msjBody.titulo = 'Modulo Servicio: Developer®';
          this.msjBody.mensaje = resp.Mensaje;
          this.msjBody.detalle = resp.Detalle;
          //============================================================
          this.frmCliente.setValue(this.frmCliente.value);
          this.frmCliente.controls['id'].setValue(parseInt(resp.Id));
          break;
      }
      this.BtnSpinner = false;
    });
    //===============================
  }

  public Nuevo = () => {
    this.visibleMjs = false;
    this.frmCliente.setValue(this.MdlCliente);
    //this.frmCliente.controls['id_rh_empleado'].setValue(localStorage.getItem("id"));
    this.frmCliente.controls['id'].setValue(-1);
    this.frmCliente.controls['id_cliente_tipo'].setValue(1);
    this.frmCliente.controls['id_cliente_domicilio'].setValue(null);
    this.frmCliente.controls['id_sat_usocfdi'].setValue(null);
    this.frmCliente.controls['id_sat_regimenfiscal'].setValue(null);
    this.usoCFDI = ''
    this.RegimenCFDI = ''
  }

    //==============================================================================================================
    public SatUsoCfedi(jsonSatUsoCFDI: any) {
      this.usoCFDI = jsonSatUsoCFDI.descripcion;
      this.frmCliente.controls['id_sat_usocfdi'].setValue(parseInt(jsonSatUsoCFDI.id));
      this.visible = false;
    }
    //==============================================================================================================
    public SatRegimen(jsonRegimenCFDI: any) {
      this.RegimenCFDI = jsonRegimenCFDI.descripcion;
      this.frmCliente.controls['id_sat_regimenfiscal'].setValue(parseInt(jsonRegimenCFDI.id));
      this.dlgRegimenvisible = false;
    }
    //==============================================================================================================
    public SatCobro(jsonSatCobroCFDI: any) {
      this.SatCobroCFDI = jsonSatCobroCFDI.descripcion;
      this.frmCliente.controls['id_sat_doc_cobro'].setValue(parseInt(jsonSatCobroCFDI.id));
      this.dlgDocCbrovisible = false;
    }

}
