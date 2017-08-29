import { Persona } from './persona';
import { Empleo } from './empleo';
 
export class Cliente extends Persona {

    //public persona: Persona;
    public conyuge: Persona;
    public coTitular: Persona;
    public empleo: Empleo;
    public id_cliente: number;

    constructor(
        conyuge?: Persona,
        coTitular?: Persona,
        empleo?: Empleo
        
    ) {
        super();
        this.conyuge = new Persona();
        this.coTitular = new Persona();
        this.empleo = new Empleo();
    }
}