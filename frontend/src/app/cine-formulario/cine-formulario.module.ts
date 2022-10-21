import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CineFormularioPageRoutingModule } from './cine-formulario-routing.module';

import { CineFormularioPage } from './cine-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CineFormularioPageRoutingModule
  ],
  declarations: [CineFormularioPage]
})
export class CineFormularioPageModule {}
