import { InjectionToken } from '@angular/core';

export type ButtonAppearence =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'destructive'
  | 'flat'
  | 'outline';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';

export interface ButtonTypeOptions {
  readonly buttonType: ButtonAppearence;
}

export const BUTTON_TYPE_DEFAULT_OPTIONS: ButtonTypeOptions = {
  buttonType: 'primary',
};

export const BUTTON_TYPES_OPTIONS = new InjectionToken('', {
  factory: () => BUTTON_TYPE_DEFAULT_OPTIONS,
});
