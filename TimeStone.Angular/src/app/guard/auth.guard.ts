import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { OidcFacade } from 'ng-oidc-client';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private oidcFacade: OidcFacade) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.oidcFacade.waitForAuthenticationLoaded().pipe(
      switchMap(loading => {
        return this.oidcFacade.identity$.pipe(
          first(),
          switchMap(user => {
            if (user && !user.expired) {
              return of(true);
            } else {
              this.router.navigate(['/login']);
              return of(false);
            }
          })
        );
      })
    );
  }
}
