import { Component, OnInit } from '@angular/core';
import {Sala} from "../modelos/Sala";
import {SalaService} from "../servicios/sala.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-sala-detalle',
  templateUrl: './sala-detalle.page.html',
  styleUrls: ['./sala-detalle.page.scss'],
})
export class SalaDetallePage implements OnInit {
  public id: string;
  public loader = false;
  public sala: Sala = new Sala();
  constructor(
    private salaServicio: SalaService,
    private url: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }


  ngOnInit() {
    this.url.params.subscribe(
      res =>{
        this.id = res.id;
      }
    );
    this.obtenerSala();
  }

  obtenerSala(){
    this.salaServicio.obtenerSala(this.id).subscribe(
      res => {
        this.sala =res;
      }
    );
  }

  irAmodificar(){
    this.router.navigate(['/sala-modificar'],{queryParams: this.sala});
  }

  activarDesactivar() {
    this.showLoading();
    this.salaServicio.activarInactivar(this.sala.salaID).subscribe(
      respuesta => {
        console.log('correcto....', respuesta);
        this.sala.activo = !this.sala.activo;
      },
      error => {
        console.log('Ocurrio un error al modifacar el registro', error);
      },
      () => {
        this.loader = false;
      }
    );
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}
