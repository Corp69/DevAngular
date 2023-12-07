import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from './Services/Producto.service';
import { MdlProducto } from './models/MdlProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;

  //==============================================================================================================
  //listados:
  public lstEstatus: any;
  public lstClasificacion: any;


  //==============================================================================================================
  //modelos:
  public MdlProducto: MdlProducto = new MdlProducto();


  //==============================================================================================================
  //Modales msj de alerta:
  public visibleMjs:boolean = false;
  // variables para mensaje actualizar guardar 
  public msjBody: any = { msjTipo: 1, titulo: '', mensaje: '', detalle: '' };

   //==============================================================================================================
  //Formularios del app:
  public frmProducto: FormGroup = this.fb.group({
    id: [-1],
    descripcion: [, [Validators.required, Validators.minLength(3)]],
    observaciones: [],
    importe: [0.00, [Validators.required, Validators.min(0)]],
    // listados
    id_app_producto_clasificacion: [, [Validators.required, Validators.minLength(0)]],
    id_app_producto_estatus:[, [Validators.required, Validators.minLength(0)]]
  });


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private servicio: ProductoService
    //private datePipe: DatePipe,
  ) {
    this.route.params.subscribe(params => {
      if (+params['id'] > -1) {
        // AGREGAMOS LA INFORMACION AL FORMULARIO
        this.servicio.Datainfo(+params['id']).subscribe(resp => {
          this.frmProducto.setValue(resp.Detalle);
        });
      }
    });
  }

  ngOnInit() {
    //=========================================================================================================================
    //carga listados
    this.servicio.listClasificacion().subscribe(resp => { this.lstClasificacion = resp.Detalle; });
    this.servicio.listEstatus().subscribe(resp => { this.lstEstatus = resp.Detalle; });
    //=========================================================================================================================
  }
  
  //=========================================================================================================================
  //Crud: producto
  public Almacenar = () => {
    this.BtnSpinner = true;
    //===============================
    this.servicio.Almacenar(this.frmProducto.value).subscribe(resp => {
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
          this.frmProducto.setValue(this.frmProducto.value);
          this.frmProducto.controls['id'].setValue(parseInt(resp.Id));
          break;
      }
      this.BtnSpinner = false;
    });
    //===============================
  }
  
  //=========================================================================================================================
  //Nuevo: producto
  public Nuevo = () => {
    this.visibleMjs = false;
    this.frmProducto.setValue(this.MdlProducto);
    this.frmProducto.controls['id'].setValue(-1);
  }


}
