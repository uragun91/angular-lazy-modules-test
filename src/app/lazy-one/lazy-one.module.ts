import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneRoutingModule } from './lazy-one-routing.module';
import { LazyOneComponent } from './lazy-one.component';
import { WithConfigModule } from '../with-config/with-config.module';

@NgModule({
  imports: [
    CommonModule,
    LazyOneRoutingModule,
    WithConfigModule.forFeature('MESSAGE FOR LAZY-ONE-MODULE')
  ],
  declarations: [LazyOneComponent]
})
export class LazyOneModule {}
