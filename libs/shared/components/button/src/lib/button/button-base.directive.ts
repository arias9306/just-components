/* eslint-disable @angular-eslint/no-host-metadata-property */
import { computed, Directive, input } from '@angular/core';
import { ButtonAppearence, ButtonShape, ButtonSize } from './button-types';

const SIZE_MAP: Record<string, string[]> = {
  xs: ['cmp-button--xs'],
  s: ['cmp-button--s'],
  m: ['cmp-button--m'],
  l: ['cmp-button--l'],
};

@Directive({
  standalone: true,
  host: {
    '[attr.data-appearance-type]': 'appearence()',
    '[attr.data-shape]': 'shape()',
    '[class]': 'sizeClass()',
    class: 'cmp-button',
  },
  hostDirectives: [],
})
export class ButtonBaseDirective {
  // private readonly elementRef = inject(ElementRef);

  appearence = input<ButtonAppearence>('primary');
  size = input<ButtonSize>('m');
  shape = input<ButtonShape>('rounded');

  sizeClass = computed(() => {
    const sizeClass = SIZE_MAP[this.size()];
    return sizeClass.join(' ');
  });

  // sizeClassEffect = effect(() => {
  //   const element: HTMLButtonElement = this.elementRef.nativeElement;
  //   const sizeClass = SIZE_MAP[this.size()];
  //   element.classList.add(...sizeClass);
  // });
}
