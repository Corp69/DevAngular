import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,  ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {



  public myForm: FormGroup = this.fb.group({
    fecha1: [ this.datePipe.transform(new Date(), 'dd-MM-yyyy'), [] ],
    fecha12:[ this.datePipe.transform(new Date(), 'dd-MM-yyyy'), [] ], 
    id_estatus: [0, [ Validators.required, Validators.min(0) ] ]
  });
  

  public ELEMENT_DATA: any = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', axx: 'sx'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', axx: 'sx'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', axx: 'sx'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', axx: 'sx'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', axx: 'sx'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', axx: 'sx'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', axx: 'sx'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', axx: 'sx'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', axx: 'sx'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', axx: 'sx'},
  ];


  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'axx'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder,
    private datePipe: DatePipe
    ) {}
  
    ngOnInit() {
      this.myForm = this.fb.group({
        fecha1: this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
        fecha12: this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
        id_estatus: -1
      });
    }


    public onSave() {
     
     this.myForm.controls['fecha1'].setValue(this.datePipe.transform(this.myForm.value.fecha1, 'dd-MM-yyyy'));
     this.myForm.controls['fecha12'].setValue(this.datePipe.transform(this.myForm.value.fecha12, 'dd-MM-yyyy'));
     console.log(this.myForm.value);
     
    }

    public seleccionarFecha1( _fecha: any ) {
     this.myForm.controls['fecha1'].setValue(_fecha.value);
     //this.myForm.controls['fecha1'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
    }
    public seleccionarFecha2( _fecha: any ) {
      this.myForm.controls['fecha12'].setValue(_fecha.value);        
    //  this.myForm.controls['fecha12'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
    }

  @ViewChild(MatSort)sort!: MatSort;
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

    announceSortChange(sortState: Sort) {
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }

    public doFilter = (value: any) => {
      this.dataSource.filter = value.target.value.trim().toLocaleLowerCase();
    }
   





}
