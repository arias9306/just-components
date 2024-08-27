/* eslint-disable @angular-eslint/directive-selector */
import { Directive, inject, Input } from '@angular/core';
import { BUTTON_TYPES_OPTIONS } from './button-types';

@Directive({
  standalone: true,
  selector: '[cmpAppearance]',
  host: {
    cmpAppearance: '',
    '[attr.data-appearance]': 'cmpAppearance',
  },
})
export class ButtonAppearanceDirective {
  @Input()
  public cmpAppearance = inject(BUTTON_TYPES_OPTIONS).buttonType;
}
