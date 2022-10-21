import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CineDetallePageRoutingModule } from './cine-detalle-routing.module';

import { CineDetallePage } from './cine-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CineDetallePageRoutingModule
  ],
  declarations: [CineDetallePage]
})
export class CineDetallePageModule {}
