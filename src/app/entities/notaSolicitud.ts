export class NotaSolicitud {

    public idNota: number;
    public idSolicitud: number;
    public idUsuarioAlta: number;
    public nota: string;
    public fechaCreacion: Date;

    constructor(
        idNota?: number,
        idSolicitud?: number,
        idUsuarioAlta?: number,
        nota?: string,
        fechaCreacion?: Date
    ) {
        if (idNota) this.idNota = idNota;
        else this.idNota = null;

        if (idSolicitud) this.idSolicitud = idSolicitud;
        else this.idSolicitud = null;

         if (idUsuarioAlta) this.idUsuarioAlta = idUsuarioAlta;
        else this.idUsuarioAlta = null;

        if (nota) this.nota = nota;
        else this.nota = '';

        if (fechaCreacion) this.fechaCreacion = fechaCreacion;
        else this.fechaCreacion = null;
    }
}