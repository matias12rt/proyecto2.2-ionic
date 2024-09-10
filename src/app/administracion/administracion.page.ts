import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  nombre: string;
  position: number;
  valor: number;
  cantidad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'CHAMPION CAT', valor: 1.201, cantidad: 2},
  {position: 2, nombre: 'CHAMPION DOG', valor: 4.201, cantidad: 4},
  {position: 3, nombre: 'TRAPER SHAMPOO', valor: 6.941, cantidad: 2},
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
  email: string | null = null;  // Variable para almacenar el email recibido

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.email = navigation.extras.state['email'];
        console.log('Email recibido:', this.email);  // Mostrar el email en la consola
      }
    });
  }

  ngOnInit() {}
}
