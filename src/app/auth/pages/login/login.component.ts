import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      console.log('Controller ===> ', resp );
      switch (resp.data) {
        case undefined:
          this.Titulo = resp.Ttitulo;
          this.Mensaje = resp.Mensaje;
          this.Detalle = resp.Detalle;
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

  showDialog() {
    this.visible = true;
  }


}
