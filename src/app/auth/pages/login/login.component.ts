import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public myForm: FormGroup = this.fb.group({
    USUARIO: ['',  [],[] ],
    PASSS:    ['',  [],[] ]
  });

  constructor( 
    private fb: FormBuilder,
    private servicio: AuthService,
    private router: Router
    ){}

  public onSave() {
    this.servicio.inicioSesion3(this.myForm.value).subscribe(resp => {
      localStorage.setItem('id', resp.data.user.id! );
      localStorage.setItem('Usuario', resp.data.user.usuario! );
      localStorage.setItem('token', resp.data.token! );
    });
    this.router.navigate(['./Control/inicio']);
  }
}
