/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, input } from '@angular/core';
import { InputType } from '../../types/input';
@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  inputType = input.required<InputType>();

  iconName = input.required<string>();
  placeholder = input.required<string>();
}
