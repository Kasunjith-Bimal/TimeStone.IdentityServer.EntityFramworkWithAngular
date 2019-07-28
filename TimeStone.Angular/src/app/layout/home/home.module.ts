import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { HomeComponent } from './home.component';
import {GalleriaModule} from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        GalleriaModule,
        CardModule,
        ButtonModule,
        PerfectScrollbarModule
       
    ],
    declarations: [
        HomeComponent
    ], 
    providers: [
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
      ]
})
export class HomeModule {}