import { Component, OnInit } from '@angular/core';
import { CuatroImagenes }from '../../clases/cuatro-imagenes';
import { ImagenesService } from '../../servicios/imagenes.service';
import { Imagenes } from '../../clases/imagenes';
//import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
@Component({
  selector: 'app-cuatro-imagenes',
  templateUrl: './cuatro-imagenes.component.html',
  styleUrls: ['./cuatro-imagenes.component.css']
})
export class CuatroImagenesComponent implements OnInit {

  nuevoJuego: CuatroImagenes;
  imagenes: string[];

  constructor(private servicioImagenes:ImagenesService) {
    this.nuevoJuego = new CuatroImagenes(servicioImagenes);
    this.generarjugada();
  }
  generarjugada() {
    let jugada: Imagenes;
    jugada = this.nuevoJuego.elegirImagenes();
    if(jugada === undefined){
      this.imagenes = new Array()
    }
    else{
      this.imagenes = jugada.urlImagenes;
      //console.log(this.imagenes);
      this.nuevoJuego.respuesta = jugada.referencia;
    }
    
    
      
  }
  verificar() {
    if(this.nuevoJuego.verificar()){
      console.log("GANASTE");
      this.generarjugada();
    }
    else{
      console.log("NO");
    }
  }
  ngOnInit() {
    
  }

}
