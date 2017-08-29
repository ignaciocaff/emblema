import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/index';
import { UserService } from '../../services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [UserService]
})

export class HomeComponent {
    titulo: String = '';
    currentUser: User;
    users: Array<User>;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) {
        this.titulo = "Inicio";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser == null) {
            this.router.navigate(['login']);
        }
    }

    // ngOnInit() {
    // }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users.json(); });
    }

    solicitudesCarga_Click() {
        this.titulo = "Carga de Solicitudes";
        this.router.navigate(['home/solicitudes-carga']);
    }
    solicitudesListado_Click() {
        this.titulo = "Listado de Solicitudes";
        this.router.navigate(['home/solicitudes-listado']);
    }
    productosCarga_Click() {
        this.titulo = "Carga de Productos";
        this.router.navigate(['home/productos-carga']);
    }
    productosListado_Click() {
        this.titulo = "Listado de Productos";
        this.router.navigate(['home/productos-listado']);
    }
    empleadosCarga_Click() {
        this.titulo = "Carga de Personal";
        this.router.navigate(['home/empleados-carga']);
    }
    empleadosListado_Click() {
        this.titulo = "Listado de Personal";
        this.router.navigate(['home/empleados-listado']);
    }
}