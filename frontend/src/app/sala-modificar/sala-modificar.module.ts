import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaModificarPageRoutingModule } from './sala-modificar-routing.module';

import { SalaModificarPage } from './sala-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaModificarPageRoutingModule
  ],
  declarations: [SalaModificarPage]
})
export class SalaModificarPageModule {}
