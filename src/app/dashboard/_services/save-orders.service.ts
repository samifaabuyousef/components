import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, SaveOrders } from 'src/apiMap';
import { CrudService } from 'src/app/core/services/crud.service';
import { SaveOrder } from '../models/saveOrder';

@Injectable({
  providedIn: 'root'
})
export class SaveOrdersService extends CrudService<SaveOrder> {

  constructor(protected http: HttpClient) {
    super(http, BASE_URL, SaveOrders);
  }
}
