import {
    EstadoSolicitud,
    Cliente,
    Empleado,
    Producto,
    Usuario,
    NotaSolicitud
} from './index';

export class Solicitud {

    public id_solicitud: number;
    public estado: EstadoSolicitud;
    public cliente: Cliente;
    public producto: Producto;
    public senia: number;
    public monto_mensual: number;
    public vendedor: Empleado;
    public usuarioAlta: Usuario;
    public fecha_solicitud: Date;
    public nro_contrato: number;

    public lsNotasSolicitud: Array<NotaSolicitud>;

    constructor(
        id_solicitud?: number,
        estado?: EstadoSolicitud,
        cliente?: Cliente,
        producto?: Producto,
        senia?: number,
        monto_mensual?: number,
        vendedor?: Empleado,
        usuarioAlta?: Usuario,
        lsNotasSolicitud?: Array<NotaSolicitud>
    ) {
        //this.numero 
        this.estado = new EstadoSolicitud();
        this.cliente = new Cliente();
        this.producto = new Producto();
        this.vendedor = new Empleado();
        this.usuarioAlta = new Usuario();

        if (lsNotasSolicitud) this.lsNotasSolicitud = lsNotasSolicitud;
        else this.lsNotasSolicitud = new Array<NotaSolicitud>();
    }
}