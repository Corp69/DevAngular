import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  implements OnInit {

  //****************************************************************** */
  //  formularios: formularios utilzados 
  public myForm: FormGroup = this.fb.group({
    USUARIO: ['', [ Validators.required, Validators.minLength(3) ] ],
    PASSS: [0, [ Validators.required, Validators.min(0) ] ]
  });

USUARIO: any;
  
  constructor( 
    private fb: FormBuilder,
    private servicio: AuthService,
    private router: Router
    ){
     
    }

    ngOnInit() {
      this.myForm = this.fb.group({
        USUARIO: '',
        PASSS: ''
      });
    }
   

  public onSave() {
    this.servicio.inicioSesion3(this.myForm.value).subscribe(resp => {
      localStorage.setItem('id', resp.data.user.id! );
      localStorage.setItem('Usuario', resp.data.user.usuario! );
      localStorage.setItem('token', resp.data.token! );
    });
    this.router.navigate(['./Control/inicio']);
  }
}
