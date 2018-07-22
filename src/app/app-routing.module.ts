import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatsComponent }        from './cats/cats.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
