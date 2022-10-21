import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaFormularioPageRoutingModule } from './sala-formulario-routing.module';

import { SalaFormularioPage } from './sala-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaFormularioPageRoutingModule
  ],
  declarations: [SalaFormularioPage]
})
export class SalaFormularioPageModule {}
