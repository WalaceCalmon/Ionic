import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RotasMenu } from '../interface/interface_rotas';

@Injectable({
  providedIn: 'root'
})
export class DataServiceLocalService {

  constructor(
    private http: HttpClient
  ) { }

  getRotasMenu(){
    return this.http.get<RotasMenu[]>('../../assets/data/menu-opts.json');
  }

}
