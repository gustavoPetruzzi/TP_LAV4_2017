import {Juego} from './juego';
import { Resultado }from './resultado.enum';
export class JuegoPiedraPapelTijera extends Juego {
    eleccionPc: number = 0;
    eleccionUsuario = 0;
    resultado: Resultado;
    constructor(nombre?:string, gano?:boolean, jugador?:string){
        super("Piedra Papel o Tijera", gano, jugador);
    }
    public verificar() {
        // 1 piedra, 2 papel, 3 tijera
        let gano: boolean;
        switch (this.eleccionUsuario) {
            case 1:
                if(this.eleccionPc == 1){
                    console.info("empate");
                    console.info("piedra");
                    gano = false;
                    this.resultado = Resultado.Empato
                }
                else if(this.eleccionPc == 2){
                    console.info("perdiste");
                    console.info("papel");
                    gano = false;
                    this.resultado = Resultado.Perdio
                }
                else{
                    console.info("ganaste");
                    console.info("tijera");
                    gano = true;
                    this.resultado = Resultado.Gano;
                }
                break;
                
            case 2:
                if(this.eleccionPc == 3){
                    console.info("perdiste");
                    console.info("tijera");
                    gano = false;
                    this.resultado = Resultado.Perdio;
                }
                else if(this.eleccionPc == 2){
                    console.info("empate");
                    console.info("papel");
                    gano = false;
                    this.resultado = Resultado.Empato
                }
                else{
                    console.info("ganaste");
                    console.info("piedra");
                    gano = true;
                    this.resultado = Resultado.Gano;
                }
                break;
            case 3:
                if(this.eleccionPc == 1){
                    console.info("perdiste");
                    console.info("piedra");
                    gano = false;
                    this.resultado = Resultado.Perdio
                }
                else if(this.eleccionPc == 3){
                    console.info("empate");
                    console.info("tijera");
                    gano = false;
                    this.resultado = Resultado.Empato
                }
                else{
                    console.info("Ganaste");
                    console.info("papel");
                    gano = true;
                    this.resultado = Resultado.Gano;
                }
                break;
            default:
                break;
        }
        // VER ESTO.
        return this.gano;
    }
    public generarEleccion(){
        this.eleccionPc = Math.floor(Math.random() * 3) + 1;
        this.gano = false;
    }

}
