import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
// components
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { DetailsComponentComponent } from "./components/details-component/details-component.component";

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'details', component: DetailsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
