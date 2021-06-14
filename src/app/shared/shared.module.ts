import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  exports: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
