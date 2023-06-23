import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController:AlertController,
    private router:Router ) {  this.formularioLogin = this.fb.group({
    'nombre': new FormControl("",Validators.required),
    'password': new FormControl("",Validators.required)
  })

}

  ngOnInit() {
  }
  async ingresar(){
    const usuario = this.formularioLogin.value.nombre;
    const password = this.formularioLogin.value.password;
    


    if(usuario === 'samuel' && password === '1234'){
      this.router.navigate(['/home'])
      console.log('Ingresado');
      
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}
