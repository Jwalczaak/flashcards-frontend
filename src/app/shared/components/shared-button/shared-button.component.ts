import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
})
export class SharedButtonComponent {
  type = input.required<string>();
  clickButton = output<void>();

  onButtonClick(): void {
    this.clickButton.emit();
  }
}
