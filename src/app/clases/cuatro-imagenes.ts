import { Juego } from '../clases/juego';
import { Imagenes } from '../clases/imagenes';
import { IMAGENES } from '../clases/mock-imagenes';
import { ImagenesService } from '../servicios/imagenes.service';
export class CuatroImagenes extends Juego {
    imagenes:Imagenes[];
    imagenYaSalida: number[] = new Array();
    respuesta: string;
    respuestaUsuario: string = "";
    
    constructor(private servicioImagenes:ImagenesService ,nombre?: string, gano?: boolean, jugador?:string,){
        super("4 imagenes 1 palabra", gano, jugador);
    }
    /// 
    public elegirImagenes(){
        let numero = Math.floor((Math.random() * 100));
        this.imagenYaSalida.indexOf(numero) > -1;
        
       
        
    }
    
    public verificar(){
        if(this.respuesta == this.respuestaUsuario){
            return true;
        }
        else{
            return false;
        }
    }
}
