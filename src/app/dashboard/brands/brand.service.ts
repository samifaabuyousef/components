import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brands, BASE_URL} from '../../../apiMap';
import {CrudService} from '../../core/services/crud.service';
import { BrandModal} from './models/brand-model';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends CrudService<BrandModal>  {
  constructor(protected http: HttpClient) {
    super(http, BASE_URL, Brands);
  }
}
