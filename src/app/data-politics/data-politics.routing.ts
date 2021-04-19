import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataPoliticsComponent } from './../data-politics/data-politics/data-politics.component';

const routes: Routes = [
  {
    path: '',
    component: DataPoliticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPoliticsRoutingModule {}
