/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/component-selector */
import { Component, input, ViewEncapsulation } from '@angular/core';
import { ButtonBaseDirective } from './button-base.directive';

@Component({
  selector: 'button[cmp-button]',
  standalone: true,
  template: `
    <ng-content select="[icon-start]"> </ng-content>
    <span class="button-label"><ng-content> </ng-content></span>
    <ng-content select="[icon-end]"> </ng-content>
    @if (loading()) {
    <i class="fa fa-spinner fa-spin fa-fw button-label loader"></i>
    }
  `,
  styleUrl: './button.component.scss',
  hostDirectives: [
    {
      directive: ButtonBaseDirective,
      inputs: ['appearence', 'size', 'shape'],
    },
  ],
  host: {
    '[class.loading]': 'loading()',
  },
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  loading = input<boolean | null>(false);
}
