import { Juego } from '../clases/juego';
import { Imagenes } from '../clases/imagenes';
import { IMAGENES } from '../clases/mock-imagenes';
import { ImagenesService } from '../servicios/imagenes.service';
export class CuatroImagenes extends Juego {
    //imagenes:Imagenes[];
    proximoNumero = 0;
    respuesta: string;
    respuestaUsuario: string = "";
    
    constructor(private servicioImagenes:ImagenesService ,nombre?: string, gano?: boolean, jugador?:string){
        super("4 imagenes 1 palabra", gano, jugador);
    }
    /// 
    public elegirImagenes(ultimoNumero?:number){
        if(ultimoNumero){
            if(ultimoNumero < this.servicioImagenes.cantidadImagenes()){
                this.proximoNumero = ultimoNumero + 1;
                return this.servicioImagenes.getImagenes(ultimoNumero + 1);
            }
            else{
                return new Imagenes();
            }
        }
        else {
            let imagenes:Imagenes;
            imagenes =this.servicioImagenes.getImagenes(this.proximoNumero);
            this.proximoNumero++;
            return imagenes;
        }
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
