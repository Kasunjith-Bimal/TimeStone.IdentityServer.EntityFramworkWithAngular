import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OidcFacade } from 'ng-oidc-client';
import { User } from 'oidc-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : string;
  identity$: Observable<User>;
  userInfo$: Observable<User>;
    constructor(public router: Router,private oidcFacade: OidcFacade,private http: HttpClient) {

       
    }

    ngOnInit() {
      this.identity$ = this.oidcFacade.identity$;
      this.oidcFacade.getOidcUser();
      this.identity$.subscribe(identity=>{
        //  console.log("header"+JSON.stringify(identity.profile.name))
        this.userName = identity.profile.name;
        });
    }

    loginRedirect(){
      this.oidcFacade.signinRedirect({
        data: {
          redirect_url: 'http://localhost:4200'
        }
      });
  
    }

    signoutRedirect(){

      this.oidcFacade.signoutRedirect();
    }
    navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
}
