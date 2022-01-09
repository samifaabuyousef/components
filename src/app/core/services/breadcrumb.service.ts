import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

    // tslint:disable-next-line:variable-name
    private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

    readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
      filter((event) => event instanceof NavigationEnd)
      ).subscribe(event => {
      // Construct the breadcrumb hierarchy
      const root = this.router.routerState.snapshot.root;
      let breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      breadcrumbs = breadcrumbs.slice().reverse().filter((v, i, a) => a.findIndex(t => (t.label === v.label)) === i).reverse();
      this._breadcrumbs$.next(breadcrumbs);
    });
  }

     // tslint:disable-next-line:typedef
     private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
      if (route) {
        // Construct the route URL
        const routeUrl = parentUrl.concat(route.url.map(url => url.path));
        // Add an element for the current route part
        if (route.data.breadcrumb) {
          const breadcrumb = {
            label: this.getLabel(route.data),
            url: '/' + routeUrl.join('/')
          };
          breadcrumbs.push(breadcrumb);
        }
        // Add another element for the next route part
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
      }
    }

    // tslint:disable-next-line:typedef
    private getLabel(data: Data) {
      return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
    }
}
