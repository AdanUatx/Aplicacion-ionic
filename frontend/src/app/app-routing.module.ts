import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cine-detalle',
    loadChildren: () => import('./cine-detalle/cine-detalle.module').then( m => m.CineDetallePageModule)
  },
  {
    path: 'sala-detalle',
    loadChildren: () => import('./sala-detalle/sala-detalle.module').then( m => m.SalaDetallePageModule)
  },
  {
    path: 'sala-formulario',
    loadChildren: () => import('./sala-formulario/sala-formulario.module').then( m => m.SalaFormularioPageModule)
  },
  {
    path: 'cine-formulario',
    loadChildren: () => import('./cine-formulario/cine-formulario.module').then( m => m.CineFormularioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
