import { Component } from '@angular/core';
import { InputTextComponent } from '../../shared/components/input-text/input-text.component';
import { SharedButtonComponent } from '../../shared/components/shared-button/shared-button.component';

@Component({
  selector: 'app-auth-page',
  imports: [InputTextComponent, SharedButtonComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {}
