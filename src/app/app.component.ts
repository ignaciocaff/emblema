import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// Import BlockUI decorator & optional NgBlockUI type
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    // Decorator wires up blockUI instance
    @BlockUI() blockUI: NgBlockUI;

   constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
}
}