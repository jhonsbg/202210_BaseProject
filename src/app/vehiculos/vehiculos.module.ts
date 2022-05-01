import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListaComponent } from './vehiculo-lista/vehiculo-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehiculoListaComponent],
  declarations: [VehiculoListaComponent]
})
export class VehiculosModule { }
