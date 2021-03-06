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
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'data-treatment',
        loadChildren: () =>
          import('./data-politics/data-politics.module').then(
            (m) => m.DataPoliticsModule
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
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
