import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../../types/input.type';
@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  inputType = input.required<InputType>();
  iconName = input<string>();
  placeholder = input.required<string>();

  value: string = '';
  disabled: boolean = false;
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string): void {
    this.value = value || '';

    console.log(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;

    this.value = newValue;
    this.onChange(newValue);
  }

  onBlur(): void {
    this.onTouch();
  }
}
