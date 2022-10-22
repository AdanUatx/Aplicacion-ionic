import { Component, OnInit } from '@angular/core';
import {Cine} from "../modelos/Cine";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {CineService} from "../servicios/cine.service";

@Component({
  selector: 'app-cine-detalle',
  templateUrl: './cine-detalle.page.html',
  styleUrls: ['./cine-detalle.page.scss'],
})
export class CineDetallePage implements OnInit {
  public id: string;
  public loader = false;
  public cine: Cine = new Cine();
  constructor(
    private cineServicio: CineService,
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
    this.obtenerCine();
  }

  obtenerCine() {
    this.cineServicio.obtenerCine(this.id).subscribe(
      res => {
        this.cine =res;
      }
    );
    }

  irAmodificar(){
    this.router.navigate(['/cine-formulario'],{queryParams: this.cine});
  }

  activarDesactivar() {
    this.showLoading();
    this.cineServicio.activarInactivar(this.cine.cineID).subscribe(
      respuesta => {
        console.log('correcto....', respuesta);
        this.cine.registro_activo = !this.cine.registro_activo;
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
