export class EstadoSolicitud {

    public id_estado_solicitud: number;
    public n_estado_solicitud: string;

    constructor(
        id_estado_solicitud?: number,
        n_estado_solicitud?: string
    ) {
        if (id_estado_solicitud) this.id_estado_solicitud = id_estado_solicitud;
        else this.id_estado_solicitud = null;

        if (n_estado_solicitud) this.n_estado_solicitud = n_estado_solicitud;
        else this.n_estado_solicitud = null;
    }
}