import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // ******************************************
  // variable: modales
  public visible:  boolean = false;
  public Titulo:   String  = 'Inicio De Session' 
  public Mensaje:  String  = 'Consulta de manera exitosa !' 
  public Detalle:  String  = 'No existe el Usuario en la base de datos' 
  
  //****************************************************************** */
  //  formularios: formularios utilzados 
  public myForm: FormGroup = this.fb.group({
    USUARIO: ['', [Validators.required, Validators.minLength(3)]],
    PASSS: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder,
    private servicio: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      USUARIO: '',
      PASSS: ''
    });
  }


  public onSave() {
    this.servicio.inicioSesion3(this.myForm.value).subscribe(resp => {
      switch (resp.data) {
        case undefined:
          this.Titulo = resp.Ttitulo;
          this.Mensaje = resp.Mensaje;
          this.Detalle = resp.Detalle;
          console.log(resp);
          this.visible = true;
          break;
        default:
          localStorage.setItem('id', resp.data.user.id!);
          localStorage.setItem('Usuario', resp.data.user.usuario!);
          localStorage.setItem('token', resp.data.token!);
          this.router.navigate(['./Control/inicio']);
          break;
      }
    });
  }



  simpleAlert() {
    Swal.fire('Hello Angular');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  erroalert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
  topend() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  showDialog() {
    this.visible = true;
  }







}
