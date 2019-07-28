import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'oidc-client';
import { HttpClient } from '@angular/common/http';
import { OidcFacade } from 'ng-oidc-client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo$: Observable<User>;
  identity$: Observable<User>;
  constructor(private http: HttpClient, private oidcFacade: OidcFacade) { 
    this.identity$ = this.oidcFacade.identity$;
    this.identity$.subscribe(identity=>{
    localStorage.setItem("Identity",JSON.parse(JSON.stringify(identity)))
    });
  }
  images: any[];
  images1: any[];
  onImageClicked($event){
    console.log($event);
  }
  ngOnInit() {
    const identityProviderUrl = this.oidcFacade.getOidcClient().settings
    .authority;

     this.userInfo$ = this.http.get<User>(
    `${identityProviderUrl}/connect/userinfo`
    )

    console.log(this.userInfo$);

    this.images = [];
    this.images1 = [];
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'car', title:'Vechical'});

    this.images1.push({source:'assets/images/cloth/galleria1.jpg', alt:'S', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria2.jpg', alt:'T', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria3.jpg', alt:'T', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria4.jpg', alt:'S', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria5.jpg', alt:'M', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria6.jpg', alt:'J', title:'Cloths'});
  }
  
  checkUserInfo(){
    debugger;
    const identityProviderUrl = this.oidcFacade.getOidcClient().settings
    .authority;

     this.userInfo$ = this.http.get<User>(
    `${identityProviderUrl}/connect/userinfo`
    )

  }

}
