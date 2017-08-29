import {
    Persona,
    Cargo,
    Usuario
} from './index';

export class Empleado extends Persona {
    public id_empleado: number;
    public cargo: Cargo;
    public supervisor: Empleado;
    public usuario: Usuario;

    constructor(
        id_empleado?: number,
        cargo?: Cargo,
        supervisor?: Empleado,
        usuario?: Usuario
    ) {
        super();

        if (id_empleado) this.id_empleado = id_empleado;
        else this.id_empleado = null;

        if (cargo) this.cargo = cargo;
        else this.cargo = new Cargo();

        if (supervisor) this.supervisor = supervisor;
        else this.supervisor = null;

        if (usuario) this.usuario = usuario;
        else this.usuario = new Usuario();
    }
}