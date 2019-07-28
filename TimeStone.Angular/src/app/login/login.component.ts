import { Component, OnInit } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oidcFacade: OidcFacade) { }
 
  loginRedirect(){
    this.oidcFacade.signinRedirect({
      data: {
        redirect_url: 'http://localhost:4200/home'
      }
    });

  }
  ngOnInit() {
  }

}
