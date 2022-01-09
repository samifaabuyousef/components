import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, Delegations } from 'src/apiMap';
import { CrudService } from '../core/services/crud.service';
import { Delegation } from './models/delegation';

@Injectable({
  providedIn: 'root'
})
export class TestService extends CrudService<Delegation> {

constructor(protected http: HttpClient) {
  super(http, BASE_URL, Delegations);
 }

}
