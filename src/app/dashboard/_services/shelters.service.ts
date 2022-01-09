import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, Shelters } from 'src/apiMap';
import { CrudService } from 'src/app/core/services/crud.service';
import { Shelter } from '../models/shelter';

@Injectable({
  providedIn: 'root'
})
export class SheltersService extends CrudService<Shelter> {

  constructor(protected http: HttpClient) {
    super(http, BASE_URL, Shelters);
  }
}
