import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { RotasMenu } from './interface/interface_rotas';
import { DataServiceLocalService } from './services/data-service-local.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rotasMenu: Observable<RotasMenu[]>;

  constructor(
    private menuController: MenuController,
    private dataServiceLocalService: DataServiceLocalService
    ) {
      this.iniciarApp();
    }

  iniciarApp(){
    this.rotasMenu = this.dataServiceLocalService.getRotasMenu();
  }

  openFirst() {
    this.menuController.enable(true, 'principal');
    this.menuController.open('principal');
  }

  openEnd() {
    this.menuController.open('end');
  }
}
