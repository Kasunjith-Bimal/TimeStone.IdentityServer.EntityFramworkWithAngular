import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        
        
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SlidebarComponent,

    ]
})
export class LayoutModule {}