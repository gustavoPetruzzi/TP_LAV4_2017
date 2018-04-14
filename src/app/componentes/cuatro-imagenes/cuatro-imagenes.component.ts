import { Component, OnInit } from '@angular/core';
import { CuatroImagenes }from '../../clases/cuatro-imagenes';
import { ImagenesService } from '../../servicios/imagenes.service';
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
    //this.generarjugada(this.nuevoJuego.elegirImagenes());
    

  }
  generarjugada() {
      this.nuevoJuego.generarJugada();
      this.imagenes =this.nuevoJuego.elegido.urlImagenes;
  }
  verificar() {
    if(this.nuevoJuego.verificar()){
      console.log("GANASTE");
    }
    else{
      console.log("NO");
    }
  }
  ngOnInit() {
    
  }

}
