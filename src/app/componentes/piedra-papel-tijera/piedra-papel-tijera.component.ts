import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'
import { Resultado } from '../../clases/resultado.enum'
@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  Mensajes: string;
  ganadas:number;
  perdidas:number;
  empatadas:number;
  jugadas: Resultado[];
  //ocultarVerificar:boolean
  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    this.empatadas = 0;
    this.ganadas = 0;
    this.perdidas = 0;
    this.jugadas = new Array();
    
  }
  verificar(eleccion:number){
    this.nuevoJuego.eleccionUsuario = eleccion;
    this.nuevoJuego.generarEleccion();
    this.nuevoJuego.verificar();
    if(this.nuevoJuego.resultado == Resultado.Gano){
      this.ganadas+= 1;
    }
    else if(this.nuevoJuego.resultado == Resultado.Empato){
      this.empatadas += 1;
    }
    else {
      this.perdidas += 1;
    }
    console.log(this.ganadas);
    console.log(this.empatadas);
    console.log(this.perdidas);
    this.jugadas.push(this.nuevoJuego.resultado);
    console.log(this.jugadas);

  }

  ngOnInit() {
  }

}
