import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { WizardWarrantyComponent } from './components/wizard-warranty/wizard-warranty.component';
import { WizardWarrantyRoutingModule } from './wizard-warranty-routing.module';

import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    WizardWarrantyComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    WizardWarrantyRoutingModule,
  ],
})
export class WizardWarrantyModule {}
