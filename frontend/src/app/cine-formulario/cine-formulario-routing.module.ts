import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CineFormularioPage } from './cine-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: CineFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CineFormularioPageRoutingModule {}
