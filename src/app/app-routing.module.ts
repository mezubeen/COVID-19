import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./awareness/awareness.module').then( m => m.AwarenessPageModule)
  },
  {
    path: 'spread',
    loadChildren: () => import('./spread/spread.module').then( m => m.SpreadPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  },
  {
    path: 'dos',
    loadChildren: () => import('./dos/dos.module').then( m => m.DosPageModule)
  },
  {
    path: 'catch',
    loadChildren: () => import('./catch/catch.module').then( m => m.CatchPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
