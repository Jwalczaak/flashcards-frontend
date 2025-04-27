import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ButtonColor, ButtonType } from '../../types/button.type';

@Component({
  selector: 'app-shared-button',
  imports: [CommonModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
})
export class SharedButtonComponent {
  buttonType = input.required<ButtonType>();
  buttonText = input.required<string>();
  buttonColor = input.required<ButtonColor>();
  iconName = input<string>();
  clickButton = output<void>();

  onButtonClick(): void {
    this.clickButton.emit();
  }
}
