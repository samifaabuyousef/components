import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, map} from 'rxjs/operators';

import {Observable} from 'rxjs';
import {BrandService} from './brand.service';

@Injectable({
  providedIn: 'root'
})
export class BrandResolver implements Resolve<any> {
  constructor(public router: Router, public brandService: BrandService) {
  }

  // tslint:disable-next-line:typedef
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.brandService.get(route.params.id).pipe(
      catchError(() => this.router.navigate(['dums']))
    );
  }
}
