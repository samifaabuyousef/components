import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Areas, BASE_URL } from 'src/apiMap';
import { CrudService } from 'src/app/core/services/crud.service';
import { Area } from '../models/Areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService extends CrudService<Area> {

  constructor(protected http: HttpClient) {
    super(http, BASE_URL, Areas);
  }
}
