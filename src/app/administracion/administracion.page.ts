import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  position: number;
  valor: number;
  cantidad: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'CHAMPION CAT', valor: 1.201, cantidad: 2},
  {position: 2, nombre: 'CHAMPION DOG', valor: 4.201, cantidad: 4},
  {position: 3, nombre: 'TRAPER SHAMP00', valor: 6.941, cantidad: 2},
  {position: 4, nombre: 'SHAMPOO SIR DOG', valor: 9.012, cantidad: 3},
];

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'valor', 'cantidad'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
}
