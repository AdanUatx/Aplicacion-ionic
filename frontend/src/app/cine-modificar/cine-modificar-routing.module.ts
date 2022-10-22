import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CineModificarPage } from './cine-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: CineModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CineModificarPageRoutingModule {}
