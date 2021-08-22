import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTwoComponent } from './lazy-two.component';
import { LazyTwoRoutingModule } from './lazy-two-routing.component';
import { WithConfigModule } from '../with-config/with-config.module';

@NgModule({
  imports: [
    CommonModule,
    LazyTwoRoutingModule,
    WithConfigModule.forFeature('MESSAGE FOR LAZY-TWO-MODULE')
  ],
  declarations: [LazyTwoComponent]
})
export class LazyTwoModule {}
