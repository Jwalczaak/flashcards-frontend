import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';
import { SharedLinkButtonComponent } from '../../shared/components/shared-link-button/shared-link-button.component';
import { FormField } from '../../shared/types/form';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, DynamicFormComponent, SharedLinkButtonComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent implements OnInit {
  loginForm!: FormGroup;

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
      name: 'passowrd',
      placeholder: 'Password',
      required: true,
      icon: 'lock',
    },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    console.log('submit');
  }

  clickButton(): void {
    console.log('click');
  }
}
