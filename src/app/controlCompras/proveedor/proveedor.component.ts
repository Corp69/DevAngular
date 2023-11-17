import { Component, OnInit } from '@angular/core';
import { MdlProveedor } from './models/MdlProveedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from './Services/Proveedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent  implements OnInit {  
  //==============================================================================================================
  // Tabla sat al Componente:
  /**
   * @variable tabalaSat1:  sat_usocfdi       => Catalogo del sat uso CFDI. asignado a proveedor.
   * @variable tabalaSat2:  sat_regimenfiscal => Catalogo del sat uso Regimen. asignado a proveedor.
   * @variable tabalaSat3:  sat_doc_cobro     => Catalogo del sat uso Doc Combro. asignado a proveedor.
   */
  public tabalaSat1: String = 'sat_usocfdi';
  public usoCFDI = ''

  public tabalaSat2: String = 'sat_regimenfiscal';
  public RegimenCFDI = ''

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;
  
  public tablaSat3:  String = 'sat_doc_cobro';
  public SatCobroCFDI = ''
  //==============================================================================================================
  // Listados:
  public lstestatus: any;
  public lstProveedorTipo: any;
  public lstProveedorClasificacion: any;
  public lstProovedorOperacion: any;
  //==============================================================================================================
  //modelos:
  public MdlProveedor: MdlProveedor = new MdlProveedor();
  //==============================================================================================================
  //Formularios del app:
  public frmProveedor: FormGroup = this.fb.group({
    id:         [-1],
    nombre:     [, [Validators.required, Validators.minLength(3)]],
    codigo:     [],
    correo:     [],
    rfc:        [],
    curp:       [],

    id_proveedor_estatus:         [1],
    id_proveedor_tipo:            [1],
    id_rh_empleado:               [localStorage.getItem("id")],
    id_sat_usocfdi:               [1],
    //id_sat_doc_cobro:           [1],
    id_sat_regimenfiscal:         [1],
    imagen:         [ ]
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private servicio: ProveedorService
    //private datePipe: DatePipe,
  ) {
      this.route.params.subscribe(params => {  
        if( +params['id'] > -1 )
        {
          // AGREGAMOS LA INFORMACION AL FORMULARIO
          this.servicio.Datainfo(+params['id']).subscribe(resp => { this.frmProveedor.setValue(resp.Detalle[0]); });
          //CARGAMOS CFDI
          this.servicio.Datacfdi(+params['id']).subscribe(resp => {
            // rellenamos los campos de CFDI EN UNA CONSULTA APARTE  
            this.frmProveedor.controls['id_sat_regimenfiscal'].setValue(parseInt(resp.Detalle.proveedorcfdi.id_sat_regimenfiscal));
            this.frmProveedor.controls['id_sat_regimenfiscal'].setValue(parseInt(resp.Detalle.proveedorcfdi.id_sat_usocfdi));
            this.usoCFDI     = resp.Detalle.proveedorcfdi.usocfdi;
            this.RegimenCFDI = resp.Detalle.proveedorcfdi.regimen;
          });
        }
      });      
    }


  ngOnInit() {
  //=========================================================================================================================
  //carga listados
   this.servicio.listProveedorEstatus().subscribe(resp => {this.lstestatus = resp.Detalle;});
   this.servicio.listProveedorTipo().subscribe(resp => {this.lstProveedorTipo = resp.Detalle;});
   //this.servicio.listProveedorOperacion().subscribe(resp => {this.lstProovedorOperacion = resp.Detalle;});
   //this.servicio.listProveedorClasificacion().subscribe(resp => {this.lstProveedorClasificacion = resp.Detalle;});
  //=========================================================================================================================
  }

  //==============================================================================================================
  // Crud Para Proveedores:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmProveedor.value);
      //===============================
      this.servicio.AlmacenarProveedor(this.frmProveedor.value).subscribe(resp => {
        console.log(resp)
        switch (resp.Detalle) {
          case  null:
            break;
          default:
            this.frmProveedor.setValue(this.frmProveedor.value);
            console.log(resp.Detalle)
            this.frmProveedor.controls['id'].setValue(parseInt(resp.Id));
          break;
        }  
      });
      //===============================
      this.BtnSpinner = false;
  }
  
  /**
   * 
   * @returns NuevoProvedor: Resetea el formulario al valor del modelo.
   */
  public NuevoProvedor = () => {
    this.frmProveedor.setValue(this.MdlProveedor);
    this.frmProveedor.controls['id_rh_empleado'].setValue(localStorage.getItem("id"));
    this.frmProveedor.controls['id'].setValue(-1);
    this.usoCFDI     = ''
    this.RegimenCFDI = ''
    console.log(this.frmProveedor.value);
  }
  //==============================================================================================================
  //Modales:
  public visible: boolean = false;
  public dlgRegimenvisible: boolean = false;
  public dlgDocCbrovisible: boolean = false;
  //==============================================================================================================
  public  showDialog  = () => { this.visible           = true;   }
  public  dlgRegimen  = () => { this.dlgRegimenvisible = true;   }
  public  dlgDocCbro  = () => { this.dlgDocCbrovisible = true;   }
  public  closeDialog = () => { this.visible           = false;  }
  //==============================================================================================================
  public  SatUsoCfedi ( jsonSatUsoCFDI: any ){
      this.usoCFDI = jsonSatUsoCFDI.descripcion;
      this.frmProveedor.controls['id_sat_usocfdi'].setValue(parseInt(jsonSatUsoCFDI.id));
      this.visible = false;
  }
  //==============================================================================================================
  public  SatRegimen ( jsonRegimenCFDI: any ){
      this.RegimenCFDI = jsonRegimenCFDI.descripcion;
      this.frmProveedor.controls['id_sat_regimenfiscal'].setValue(parseInt(jsonRegimenCFDI.id));
      this.dlgRegimenvisible = false;
  }
  //==============================================================================================================
  public  SatCobro ( jsonSatCobroCFDI: any ){
      this.SatCobroCFDI = jsonSatCobroCFDI.descripcion;
      this.frmProveedor.controls['id_sat_doc_cobro'].setValue(parseInt(jsonSatCobroCFDI.id));
      this.dlgDocCbrovisible = false;
  }
  //==============================================================================================================
  



}
