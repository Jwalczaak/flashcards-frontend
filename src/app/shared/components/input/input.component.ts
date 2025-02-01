import { Component, input } from '@angular/core';
import { InputType } from 'zlib';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  inputType = input.required<InputType>();
}
