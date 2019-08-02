import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'veiculo/novo',
    component: VehicleAddComponent
  },
  {
    path: 'veiculo/editar/:id',
    component: VehicleEditComponent
  },
  {
    path: 'busca',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

