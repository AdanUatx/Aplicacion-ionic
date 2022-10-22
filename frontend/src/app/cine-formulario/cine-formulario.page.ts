import { CineService } from './../servicios/cine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cine } from './../modelos/Cine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine-formulario',
  templateUrl: './cine-formulario.page.html',
  styleUrls: ['./cine-formulario.page.scss'],
})
export class CineFormularioPage implements OnInit {
  private cine: Cine = new Cine();
  constructor(
    private router: Router,
    private url: ActivatedRoute,
    private cineServicio: CineService
  ) { }

  ngOnInit() {
    this.url.queryParams.subscribe(
      queryParam => {
        this.cine = JSON.parse(JSON.stringify(queryParam));
      }
    )
  }

  guardar(){
    const dato = {
      cine: this.cine.cine,
      fecha_alta: this.cine.fecha_alta,
      fecha_modificacion: this.cine.fecha_modificacion,
      registro_activo: this.cine.registro_activo,
    };
    this.cineServicio.guardarCine(dato).subscribe( res => {
      console.log(res);
      this.router.navigate(['/tabs/tab1']);
    });
  }

}
