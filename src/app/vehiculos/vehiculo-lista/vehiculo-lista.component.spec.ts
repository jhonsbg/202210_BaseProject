/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { VehiculoListaComponent } from './vehiculo-lista.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListaComponent', () => {
  let component: VehiculoListaComponent;
  let fixture: ComponentFixture<VehiculoListaComponent>;
  let debug: DebugElement;

  var table = document.getElementById("tablaPrincipal");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListaComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListaComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four rows', () => {
    var table = document.getElementById("tablaPrincipal") as HTMLTableElement;
    var tableRows = table.rows.length;

    expect(tableRows).toEqual(4);
  })
});
