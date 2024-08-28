/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/component-selector */
import { Component, input, ViewEncapsulation } from '@angular/core';
import { ButtonBaseDirective } from './button-base.directive';

@Component({
  selector: 'button[cmp-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  hostDirectives: [
    {
      directive: ButtonBaseDirective,
      inputs: ['appearence', 'size'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.btn]': 'true',
    '[class.loading]': 'loading()',
    '[disabled]': 'loading()',
  },
})
export class ButtonComponent {
  loading = input<boolean | null>(false);
}
