import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { URLSearchParams } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ArchivosJugadoresService {
  jugadores: any;
  
  peticion:any;
  constructor(  ) {
    
  }

  public   traerJugadores(ruta) {
    
    
  }

  public altaJugador(ruta, jugador){
  }

}
