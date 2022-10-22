import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaModificarPage } from './sala-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: SalaModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaModificarPageRoutingModule {}
