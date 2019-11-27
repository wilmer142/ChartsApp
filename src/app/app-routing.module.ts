import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarComponent } from './components/bar/bar.component';


const routes: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
