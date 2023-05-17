import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/carreras/carreras.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  contacto: CarrerasService = new CarrerasService();

  constructor(private carreraService: CarrerasService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new CarrerasService()
        this.contacto = params['contacto']
      }
    }

  enviar() {
    console.log(this.contacto)
    //this.carreraService.save(this.contacto)
    this.contacto = new CarrerasService()
  }

  actualizar(){
    console.log(this.contacto)
    this.contacto = new CarrerasService()
    this.router.navigate(['page/page6']);
  }
}
