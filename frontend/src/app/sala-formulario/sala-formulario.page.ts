import { Component, OnInit } from '@angular/core';
import {Sala} from '../modelos/Sala';
import {ActivatedRoute, Router} from '@angular/router';
import {SalaService} from '../servicios/sala.service';

@Component({
  selector: 'app-sala-formulario',
  templateUrl: './sala-formulario.page.html',
  styleUrls: ['./sala-formulario.page.scss'],
})
export class SalaFormularioPage implements OnInit {
  private sala: Sala = new Sala();
  constructor(
    private router: Router,
    private url: ActivatedRoute,
    private salaServicio: SalaService
  ) { }

  ngOnInit() {
    this.url.queryParams.subscribe(
      queryParam => {
        this.sala = JSON.parse(JSON.stringify(queryParam));
      }
    )
  }

  guardar(){
    const dato = {
      salaID: this.sala.salaID,
      num_sala: this.sala.numeroSala,
      asientos: this.sala.totalAsiento,
      fecha_alta: this.sala.fechaAlta,
      fecha_modificacion: this.sala.fechaModificacion,
      registro_activo: this.sala.activo,
    };
    this.salaServicio.guardarSala(dato).subscribe( res => {
      console.log(res);
      this.router.navigate(['/tabs/tab1']);
    });
  }

}
