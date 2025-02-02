import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-shared-link-button',
  imports: [],
  templateUrl: './shared-link-button.component.html',
  styleUrl: './shared-link-button.component.scss',
})
export class SharedLinkButtonComponent {
  buttonText = input.required<string>();

  clickButton = output<void>();

  onButtonClick(): void {
    this.clickButton.emit();
  }
}
