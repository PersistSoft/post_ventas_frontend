import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'warranty',
        pathMatch: 'full',
      },
      {
        path: 'warranty',
        loadChildren: () =>
          import('./wizard-warranty/wizard-warranty.module').then(
            (m) => m.WizardWarrantyModule
          ),
      },
      {
        path: '**',
        redirectTo: 'warranty',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
