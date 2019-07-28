import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VechicalRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  declarations: [VehicleComponent],
  imports: [
    CommonModule,
    VechicalRoutingModule
  ]
})
export class VehicleModule { }
