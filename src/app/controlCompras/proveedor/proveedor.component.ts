import { Component, OnInit } from '@angular/core';
import { MdlProveedor } from './models/MdlProveedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from './Services/Proveedor.service';
import Swal from 'sweetalert2';
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
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
  //Formularios del app:
  public frmProveedor: FormGroup = this.fb.group({
    id:         [-1],
    nombre:     [, [Validators.required, Validators.minLength(3)]],
    paterno:    [, [Validators.required, Validators.minLength(3)]],
    materno:    [, [Validators.required, Validators.minLength(3)]],
    codigo:     [, [Validators.required, Validators.minLength(3)]],
    correo:     [, [Validators.required, Validators.minLength(3)]],
    cp:         [, [Validators.required, Validators.minLength(3)]],
    rfc:        [, [Validators.required, Validators.minLength(3)]],
    curp:       [, [Validators.required, Validators.minLength(3)]],

    id_proveedor_estatus:         [1, [Validators.required, Validators.min(0)]],
    id_proveedor_tipo:            [1, [Validators.required, Validators.min(0)]],
    id_proveedor_clasificacion:   [1, [Validators.required, Validators.min(0)]],
    id_rh_empleado:               [localStorage.getItem("id"), [Validators.required, Validators.min(0)]],
    id_proveedor_operacion:       [1, [Validators.required, Validators.min(0)]],

    id_sat_usocfdi:           [1, [Validators.required, Validators.min(0)]],
    id_sat_doc_cobro:         [1, [Validators.required, Validators.min(0)]],
    id_sat_regimenfiscal:     [1, [Validators.required, Validators.min(0)]],

    
    fecha_creacion: [ ],
    id_municipio:   [ ],
    imagen:         [ ]
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private servicio: ProveedorService
    //private datePipe: DatePipe,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {  
      this.servicio.Datainfo(+params['id']).subscribe(resp => {
        console.log('constructor',resp)
        this.frmProveedor.setValue(resp.Detalle[0]);
      });
    });
  
  //=========================================================================================================================
  //carga listados
   this.servicio.listProveedorEstatus().subscribe(resp => {this.lstestatus = resp.Detalle;});
   this.servicio.listProveedorTipo().subscribe(resp => {this.lstProveedorTipo = resp.Detalle;});
   this.servicio.listProveedorOperacion().subscribe(resp => {this.lstProovedorOperacion = resp.Detalle;});
   this.servicio.listProveedorClasificacion().subscribe(resp => {this.lstProveedorClasificacion = resp.Detalle;});
  //=========================================================================================================================
  }

  //==============================================================================================================
  // Crud Para Proveedores:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmProveedor.value);
    setTimeout(() => {
      //===============================
      this.servicio.AlmacenarProveedor(this.frmProveedor.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.frmProveedor.setValue(this.frmProveedor.value);
            this.frmProveedor.controls['id'].setValue(parseInt(resp.Detalle));
            Swal.fire(resp.Mensaje,'Operacion Exitosa');
          break;
        }  
      });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
  }
  
  /**
   * 
   * @returns NuevoProvedor: Resetea el formulario al valor del modelo.
   */
  public NuevoProvedor = () => {
    this.frmProveedor.setValue(this.MdlProveedor);
    this.frmProveedor.controls['id_rh_empleado'].setValue(localStorage.getItem("id"));
  }
  //==============================================================================================================
  //VALIDACIONES:

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
