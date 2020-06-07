import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZbiorniczekComponent } from './zbiorniczek/zbiorniczek.component';


const routes: Routes = [
  { path: "", component: ZbiorniczekComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
