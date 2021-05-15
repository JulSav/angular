import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import {MaterialComponent} from './material/material.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {DatatableComponent} from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},
  {path: "material", component: MaterialComponent},
  {path: "reactive-form", component: ReactiveFormComponent},
  {path: "datatable", component: DatatableComponent},
  {path: "weather", component: HomePageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
