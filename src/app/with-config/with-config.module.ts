import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const TEST_MESSAGE_TOKEN = new InjectionToken(
  '@myndmanagement/filterable-view Internal Actions API Root'
);

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class WithConfigModule {
  static forFeature(message: string) {
    return {
      ngModule: WithConfigModule,
      providers: [
        {
          provide: TEST_MESSAGE_TOKEN,
          useValue: message
        }
      ]
    };
  }
}
