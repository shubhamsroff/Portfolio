import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'h', component: AppComponent },
  { path: 'port-website', loadChildren: () => import('./port-website/port-website.module').then(m => m.PortWebsiteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
