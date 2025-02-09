import { ValidatorFn } from '@angular/forms';
import { InputType } from './input';

export type FieldType = 'input' | 'input-link-button' | 'radio' | 'select';

export type FormField = {
  type: FieldType;
  inputType?: InputType;
  linkButtonText?: string;
  name: string;
  placeholder: string;
  options?: { label: string; value: string };
  required?: boolean;
  validators?: ValidatorFn[];
  icon?: string;
};
