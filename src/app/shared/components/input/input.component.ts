import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../../types/input';
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
    console.log('writeValue', value);
    this.value = value || '';

    console.log(this.value);
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    console.log('onInputChange', newValue); // Log when input changes
    this.value = newValue;
    this.onChange(newValue); // Notify the form about the value change
  }

  onBlur(): void {
    console.log('onBlur');
    this.onTouch(); // Call onTouch when the user blurs the input
  }
}
