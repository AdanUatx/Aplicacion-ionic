import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CineModificarPageRoutingModule } from './cine-modificar-routing.module';

import { CineModificarPage } from './cine-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CineModificarPageRoutingModule
  ],
  declarations: [CineModificarPage]
})
export class CineModificarPageModule {}
