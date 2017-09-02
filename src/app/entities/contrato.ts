import {
    EstadoSolicitud,
    Empleado,
} from './index';

export class Contrato {

    public id_contrato: number;
    public estado_contrato: EstadoSolicitud;
    public supervisor_venta: Empleado;
    public gerente: Empleado;
    public asesor: Empleado;

    constructor(
        id_contrato?: number,
        estado_contrato?: EstadoSolicitud,
        supervisor_venta?: Empleado,
        gerente?: Empleado,
        asesor?: Empleado,
    ) {
        //this.numero 
        this.estado_contrato = new EstadoSolicitud();
        this.supervisor_venta = new Empleado();
        this.gerente = new Empleado();
        this.asesor = new Empleado();
    }
}