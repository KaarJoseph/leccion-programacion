import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CarrerasService } from 'src/app/carreras/carreras.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  listadoContactos: CarrerasService[] = [];
  contactoSeleccionado: CarrerasService | null = null;

  constructor(private carrerasService: CarrerasService, private router: Router) {
    //this.listadoContactos = CarrerasService.getList();
    console.log('listadoContactos', this.listadoContactos);
  }

  editar(contacto: CarrerasService){
    console.log(contacto);
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['formulario'], params);
    //this.router.navigate(['page/page5'], params);
  }

  eliminar(event: Event, contacto: CarrerasService) {
    event.preventDefault(); // Evitar la acción por defecto del enlace
    const indice = this.listadoContactos.indexOf(contacto);
    if (indice !== -1) {
      this.listadoContactos.splice(indice, 1);
    }
  }
  
  nuevo() {
    this.router.navigate(['pages/page2']);
  }
}
