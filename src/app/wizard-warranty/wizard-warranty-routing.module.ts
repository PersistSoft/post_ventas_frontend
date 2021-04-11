import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WizardWarrantyComponent } from './components/wizard-warranty/wizard-warranty.component';

const routes: Routes = [
  {
    path: '',
    component: WizardWarrantyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardWarrantyRoutingModule {}
