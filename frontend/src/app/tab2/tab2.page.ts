import {Component, OnInit} from '@angular/core';
import {Cine} from '../modelos/Cine';
import {Router} from '@angular/router';
import {CineService} from '../servicios/cine.service';
import {Sala} from '../modelos/Sala';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
    public lista: Array<Cine>;
  constructor(
    private router: Router,
    private cineServicio: CineService
  ) {}

  ngOnInit(){
    this.obtenerCines();
  }

  obtenerCines(){
    this.cineServicio.obtenerCines().subscribe(
      res => {
        this.lista = res;
      },
      error => {

      },
      ()=>{

      }
    );
  }

  seleccionar(dato: Cine){
    this.router.navigate(['/cine-detalle',dato.cine]);
  }

}
