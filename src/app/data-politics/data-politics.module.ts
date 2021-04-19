import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPoliticsRoutingModule } from './data-politics.routing';

import { DataPoliticsComponent } from './data-politics/data-politics.component';

@NgModule({
  declarations: [DataPoliticsComponent],
  imports: [CommonModule, DataPoliticsRoutingModule],
})
export class DataPoliticsModule {}
