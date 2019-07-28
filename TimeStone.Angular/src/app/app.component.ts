import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { OidcFacade } from 'ng-oidc-client';
import { User } from 'oidc-client';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onetime';
  items: MenuItem[];

  identity$: Observable<User>;

  constructor(private oidcFacade: OidcFacade) {
    this.identity$ = this.oidcFacade.identity$;
    console.log(this.identity$)
  }

  ngOnInit() {
    this.oidcFacade.getOidcUser();
  }
}
