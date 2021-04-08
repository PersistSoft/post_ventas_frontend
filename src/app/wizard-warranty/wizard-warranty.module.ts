import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardWarrantyComponent } from './components/wizard-warranty/wizard-warranty.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { SharedModule } from './../shared/shared.module';

import { WizardWarrantyRoutingModule } from './wizard-warranty-routing.module';

@NgModule({
  declarations: [WizardWarrantyComponent, Step1Component, Step2Component],
  imports: [CommonModule, SharedModule, WizardWarrantyRoutingModule],
})
export class WizardWarrantyModule {}
