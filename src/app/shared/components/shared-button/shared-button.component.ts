import { Component, input, output } from '@angular/core';
import { ButtonType } from '../../types/button';

@Component({
  selector: 'app-shared-button',
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
})
export class SharedButtonComponent {
  buttonType = input.required<ButtonType>();
  clickButton = output<void>();

  onButtonClick(): void {
    this.clickButton.emit();
  }
}
