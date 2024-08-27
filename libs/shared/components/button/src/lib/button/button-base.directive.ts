/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { ButtonAppearence, ButtonSize } from './button-types';

const SIZE_MAP: Record<string, string[]> = {
  xs: ['extra-small'],
  s: ['small'],
  m: ['medium'],
  l: ['large'],
};

@Directive({
  standalone: true,
  host: {
    '[attr.data-appearence-type]': 'appearence()',
  },
  hostDirectives: [],
})
export class ButtonBaseDirective {
  private elementRef = inject(ElementRef);

  appearence = input<ButtonAppearence>('primary');
  size = input<ButtonSize>('m');

  sizeClassEffect = effect(() => {
    const element: HTMLButtonElement = this.elementRef.nativeElement;
    const sizeClass = SIZE_MAP[this.size()];

    element.classList.add(...sizeClass);
  });
}
