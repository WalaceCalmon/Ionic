import { DataServiceLocalService } from './../../services/data-service-local.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RotasMenu } from '../../interface/interface_rotas';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rotasMenu: Observable<RotasMenu[]>;

  constructor(
    private menuController: MenuController,
    private dataServiceLocalService: DataServiceLocalService
  ) { }

  ngOnInit() {
    this.rotasMenu = this.dataServiceLocalService.getRotasMenu();
  }

  mostrarMenu(){
    this.menuController.open('principal');
  }

}
