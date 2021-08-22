import { Component, Inject } from '@angular/core';
import { TEST_MESSAGE_TOKEN } from '../with-config/with-config.module';

@Component({
  template: 'Lazy one module messag: {{message}}'
})
export class LazyOneComponent {
  constructor(@Inject(TEST_MESSAGE_TOKEN) public message) {}
}
