import { Injectable } from '@angular/core';
import { Imagenes } from '../clases/imagenes';
@Injectable()
export class ImagenesService {

  constructor() { }
  imagenes: Imagenes[] = [
      {
        referencia: "policia",
        urlImagenes: [
            "./assets/cuatroImagenes/1/imagen1.jpeg",
            "./assets/cuatroImagenes/1/imagen2.jpeg",
            "./assets/cuatroImagenes/1/imagen3.jpeg",
            "./assets/cuatroImagenes/1/imagen4.jpeg"
        ]
    },
    {
        referencia: "agua",
        urlImagenes: [
            "./assets/cuatroImagenes/1/imagen5.jpg",
            "./assets/cuatroImagenes/1/imagen6.jpg",
            "./assets/cuatroImagenes/1/imagen7.jpg",
            "./assets/cuatroImagenes/1/imagen8.jpg"
        ]
    }
  ];
  getImagenes(nroImagen){
    return this.imagenes[nroImagen]
  }

}
