import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, CivilDefens } from 'src/apiMap';
import { CrudService } from 'src/app/core/services/crud.service';
import { CivilDefense } from '../models/civiledefence';


@Injectable({
  providedIn: 'root'
})
export class CivilDefenseService extends CrudService<CivilDefense> {

  constructor(protected http: HttpClient) {
    super(http, BASE_URL, CivilDefens);
   }
}
