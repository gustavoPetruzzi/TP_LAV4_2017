import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  Mensajes: string;
  //ocultarVerificar:boolean
  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    
  }
  verificar(eleccion:number){
    this.nuevoJuego.eleccionUsuario = eleccion;
    this.nuevoJuego.generarEleccion();
    this.nuevoJuego.verificar();
  }

  ngOnInit() {
  }

}
