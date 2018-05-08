import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

//FORM
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArchivosJugadoresService } from '../../servicios/archivos-jugadores.service';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  //Logueo
  usuario = '';
  clave= '';
  //Registro
  nombre = '';
  apellido = '';
  email = '';
  usuarioRegistro = '';
  claveRegistro = '';
  algo;
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  
  

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jugadores: ArchivosJugadoresService,
    private db: AngularFirestore
    
  ) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      db.firestore.settings({ timestampsInSnapshots: true });

  }


  ngOnInit() {
    
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
    }
  }
  traerJugadores(){
  }
  registrarse(){
    let usuario = {
      nombre: "juan",
      apellido: "algo",
      usuario:"user",
      mail:"algo@algo.com",
      password: '1111',
    }
    return this.db.collection('usuarios').add({
      nombre:'gustavo', 
      apellido:'petruzzi', 
      usuario:'yustix',
      email:'gustavopetruzzi19@gmail.com', 
      password:'1161544661' })
      .then(ref=>{
        return ref.id
      })
      .catch(err =>{
        return err;
      })  
      
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
