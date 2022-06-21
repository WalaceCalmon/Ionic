import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController) { }

  openFirst() {
    this.menuController.enable(true, 'principal');
    this.menuController.open('principal');
  }

  openEnd() {
    this.menuController.open('end');
  }
}
