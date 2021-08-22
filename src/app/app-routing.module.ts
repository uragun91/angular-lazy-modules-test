import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
  {
    path: 'lazy-one',
    loadChildren: () =>
      import('./lazy-one/lazy-one.module').then(m => m.LazyOneModule)
  },
  {
    path: 'lazy-two',
    loadChildren: () =>
      import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: EntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
