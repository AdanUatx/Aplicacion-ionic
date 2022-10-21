import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaFormularioPage } from './sala-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: SalaFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaFormularioPageRoutingModule {}
