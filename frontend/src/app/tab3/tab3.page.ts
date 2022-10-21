import {Component, OnInit} from '@angular/core';
import {Sala} from "../modelos/Sala";
import {Router} from "@angular/router";
import {SalaService} from "../servicios/sala.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{


  public lista: Array<Sala>;
  constructor(
    private router: Router,
    private salaServicios: SalaService
  ) {}

  ngOnInit(){
    this.obtenerSalas();
  }

  obtenerSalas(){
    this.salaServicios.obtenerSalas().subscribe(
      res => {
        this.lista = res;
      },
      error => {

      },
      ()=>{

      }
    );
  }

  seleccionar(dato: Sala){
    this.router.navigate(['/sala-detalle',dato.salaID]);
  }

}
