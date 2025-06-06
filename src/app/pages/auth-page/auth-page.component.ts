import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';
import { SharedLinkButtonComponent } from '../../shared/components/shared-link-button/shared-link-button.component';
import { AuthService } from '../../shared/services/auth.service';
import { SignInRequest } from '../../shared/types/auth.type';
import { FormField } from '../../shared/types/form.type';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, DynamicFormComponent, SharedLinkButtonComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent implements OnInit {
  loginForm!: FormGroup;
  isLoginMode = signal(true);

  private authService = inject(AuthService);
  private router = inject(Router);

  get headerText() {
    return this.isLoginMode() ? 'Sign into Your account' : 'Create Your account';
  }

  get accountInfoText() {
    return this.isLoginMode() ? "Don't have an account?" : 'Have already an account?';
  }

  get accountInfoButtonText() {
    return this.isLoginMode() ? 'Create' : 'Sign in';
  }

  onHandleSignIn(singInBody: SignInRequest): void {
    this.authService.login(singInBody).subscribe(console.log);
  }

  changeDisplayMode(): void {
    this.isLoginMode.set(!this.isLoginMode());
  }

  loginFormFields: FormField[] = [
    {
      type: 'input',
      inputType: 'email',
      name: 'email',
      placeholder: 'Email',
      required: true,
      icon: 'mail',
    },

    {
      type: 'input',
      inputType: 'password',
      linkButtonText: 'Forgot password?',
      name: 'password',
      placeholder: 'Password',
      required: true,
      icon: 'lock',
    },
  ];

  singUpFields: FormField[] = [
    {
      type: 'input',
      inputType: 'text',
      name: 'name',
      placeholder: 'Name',
      required: true,
      icon: 'person',
    },
    {
      type: 'input',
      inputType: 'text',
      name: 'surname',
      placeholder: 'Surname',
      required: true,
      icon: 'badge',
    },
    {
      type: 'input',
      inputType: 'email',
      name: 'email',
      placeholder: 'Email',
      required: true,
      icon: 'mail',
    },

    {
      type: 'input',
      inputType: 'password',
      name: 'password',
      placeholder: 'Password',
      required: true,
      icon: 'lock',
    },

    {
      type: 'input',
      inputType: 'password',
      name: 'repeatPassword',
      placeholder: 'Repeat Password',
      required: true,
      icon: 'lock',
    },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    if (this.authService.tokenSignal()) {
      // this.router.navigate(['/home']);
    }

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
