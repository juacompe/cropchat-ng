import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatsComponent }        from './cats/cats.component';
import { PostComponent }        from './post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent },
  { path: 'post', component: PostComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
