import { Observable } from 'rxjs/Rx';
import { ConfirmDialogComponent } from '../../components/common/dialog/index';
import { LocalidadesCargaComponent } from '../../components/common/localidades/index';
import { TipoProductoCargaComponent } from '../../components/common/tipoProducto/index';
import { MarcasCargaComponent } from '../../components/common/marcas/index'
import { ModelosCargaComponent } from '../../components/common/modelos/index'
import { SegmentosCargaComponent } from '../../components/common/segmentos/index';
import { ColoresCargaComponent } from '../../components/common/colores/index';
import { CombustiblesCargaComponent } from '../../components/common/combustibles/index';
import { ProductosCargaComponent } from '../../components/common/productos/index';
import { SolicitudesConfirmacionComponent } from '../../components/home/solicitudes/index';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

import {
    Provincia,
    TipoProducto,
    Marca,
    Solicitud
} from '../../entities/index';


@Injectable()
export class DialogService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {
        let confirmDialogRef: MdDialogRef<ConfirmDialogComponent>;

        confirmDialogRef = this.dialog.open(ConfirmDialogComponent);
        confirmDialogRef.componentInstance.title = title;
        confirmDialogRef.componentInstance.message = message;

        return confirmDialogRef.afterClosed();
    }

    public confirmarSolicitud(solicitud: Solicitud): Observable<boolean> {
        let solicitudesConfirmDialogRef: MdDialogRef<SolicitudesConfirmacionComponent>;

        //solicitudesConfirmDialogRef = this.dialog.open(SolicitudesConfirmacionComponent);
        //solicitudesConfirmDialogRef.componentInstance.solicitud = solicitud;

        return solicitudesConfirmDialogRef.afterClosed();
    }

    public agregarLocalidad(provincia: Provincia): Observable<boolean> {
        let localidadesCargaRef: MdDialogRef<LocalidadesCargaComponent>;

        localidadesCargaRef = this.dialog.open(LocalidadesCargaComponent, {
            width: '50%',
            data: provincia
        });

        return localidadesCargaRef.afterClosed();
    }

    public agregarTipoProducto(): Observable<boolean> {
        let tipoProductoCargaRef: MdDialogRef<TipoProductoCargaComponent>;

        tipoProductoCargaRef = this.dialog.open(TipoProductoCargaComponent, {
            width: '50%'
        });

        return tipoProductoCargaRef.afterClosed();
    }

    public agregarSegmento(tipoProducto: TipoProducto): Observable<boolean> {
        let segmentosCargaRef: MdDialogRef<SegmentosCargaComponent>;

        segmentosCargaRef = this.dialog.open(SegmentosCargaComponent, {
            width: '50%',
            data: tipoProducto
        });

        return segmentosCargaRef.afterClosed();
    }

    public agregarMarca(): Observable<boolean> {
        let marcaCargaRef: MdDialogRef<MarcasCargaComponent>;

        marcaCargaRef = this.dialog.open(MarcasCargaComponent, {
            width: '50%'
        });

        return marcaCargaRef.afterClosed();
    }

    public agregarModelo(marca: Marca): Observable<boolean> {
        let modeloCargaRef: MdDialogRef<ModelosCargaComponent>;

        modeloCargaRef = this.dialog.open(ModelosCargaComponent, {
            width: '50%',
            data: marca
        });

        return modeloCargaRef.afterClosed();
    }
    public agregarCombustible(): Observable<boolean> {
        let combustibleCargaRef: MdDialogRef<CombustiblesCargaComponent>;

        combustibleCargaRef = this.dialog.open(CombustiblesCargaComponent, {
            width: '50%'
        });

        return combustibleCargaRef.afterClosed();
    }
    public agregarColor(): Observable<boolean> {
        let colorCargaRef: MdDialogRef<ColoresCargaComponent>;

        colorCargaRef = this.dialog.open(ColoresCargaComponent, {
            width: '50%'
        });

        return colorCargaRef.afterClosed();
    }
}