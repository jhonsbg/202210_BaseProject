import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-lista',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css']
})
export class VehiculoListaComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totalRenault: number = 0;
  totalChevrolet: number = 0;
  totalNissan: number = 0;

  constructor( private vehiculoService: VehiculoService) { }

  getVehiculo(): void {
    this.vehiculoService.getVehiculo().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      
      for(var vehiculo of vehiculos){
        switch(vehiculo.marca){
          case 'Renault':
            this.totalRenault++;
            console.log('suma');
            break;
          case 'Chevrolet':
            this.totalChevrolet++;
            break;
          case 'Nissan':
            this.totalNissan++;
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.getVehiculo();
  }

}
