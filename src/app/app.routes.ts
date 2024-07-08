import { Routes } from '@angular/router';
import { PortWebsiteModule } from './port-website/port-website.module';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path:'h',component:AppComponent},
    {path:'port-website',loadChildren:()=>import('./port-website/port-website.module').then(m=>m.PortWebsiteModule)}
];
