import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarComponent } from './components/bar/bar.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';


const routes: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'radar', component: RadarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
