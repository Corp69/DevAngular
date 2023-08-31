import { Component } from '@angular/core';
import { LstProveedor } from './Services/LstProveedor.service';
import { Customer, Representative } from './domain/Customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { dataUriValidatorExtension } from '@rxweb/reactive-form-validators/validators-extension';

@Component({
  selector: 'app-lst-proveedor',
  templateUrl: './lstProveedor.component.html',
  styleUrls: ['./lstProveedor.component.css']
})
export class LstProveedorComponent {
  //============================================================================================================================================================
  // variables vista funcionalidad
  public BtnSpinner: boolean = false;
  public lstestatus: any;
  public DataProveedores: any;


  //============================================================================================================================================================

  customers!: Customer[];

  selectedCustomers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  public frmLstProveedores: FormGroup = this.fb.group({
    fecha1: [new Date(), [Validators.required, Validators.minLength(3)]],
    fecha12: [new Date(), [Validators.required, Validators.minLength(3)]],
    id_proveedor_estatus: [1, [Validators.required, Validators.minLength(0)]]
  });


  constructor(
    private customerService: LstProveedor,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    //================================================================================================================================================================
    // Listados
    this.customerService.lstEstatus().subscribe(resp => {this.lstestatus = resp.Detalle;});
    //================================================================================================================================================================
    
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }
  //=============================================================================================================================================================================
  // Gestion de fecha
  public seleccionarFecha1(_fecha: any) {
    this.frmLstProveedores.controls['fecha1'].setValue(_fecha.value);
    //this.myForm.controls['fecha1'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
  }
  public seleccionarFecha2(_fecha: any) {
    this.frmLstProveedores.controls['fecha12'].setValue(_fecha.value);
    //  this.myForm.controls['fecha12'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
  }
  //=============================================================================================================================================================================
  // Acciones en la vista
  public NuevofrmBuscar = () => {
    this.frmLstProveedores = this.fb.group({
      fecha1: [new Date(), [Validators.required, Validators.minLength(3)]],
      fecha12: [new Date(), [Validators.required, Validators.minLength(3)]]
    });
  }

  public btnBuscar() {
    this.BtnSpinner = true;
    this.frmLstProveedores.controls['fecha1'].setValue(this.datePipe.transform(this.frmLstProveedores.value.fecha1, 'dd-MM-yyyy'));
    this.frmLstProveedores.controls['fecha12'].setValue(this.datePipe.transform(this.frmLstProveedores.value.fecha12, 'dd-MM-yyyy'));
    setTimeout(() => {
      //===============================
      this.customerService.BusquedaXfecha(this.frmLstProveedores.value).subscribe(resp => {
        switch (resp.Detalle) {
          case null:
            //Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.DataProveedores = resp.Detalle._proveedoresxfecha;   
            console.log(this.DataProveedores);
          break;
        }
      });
      //===============================
      this.BtnSpinner = false;
      this.NuevofrmBuscar();
    }, 1000);
  }
  //=============================================================================================================================================================================


}
