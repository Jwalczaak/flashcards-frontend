import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInRequest } from '../../types/auth.type';
import { FormField } from '../../types/form.type';
import { InputComponent } from '../input/input.component';
import { SharedButtonComponent } from '../shared-button/shared-button.component';
import { SharedLinkButtonComponent } from '../shared-link-button/shared-link-button.component';
@Component({
  selector: 'app-dynamic-form',
  imports: [InputComponent, SharedButtonComponent, ReactiveFormsModule, SharedLinkButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  fields = input.required<FormField[]>();
  submitButtonText = input.required<string>();

  signIn = output<SignInRequest>();

  form!: FormGroup;

  ngOnInit(): void {
    const controls: { [key: string]: FormControl } = {};
    this.fields().forEach((field) => {
      controls[field.name] = new FormControl('');
    });

    this.form = new FormGroup(controls);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('dsdasdsa');
      this.signIn.emit(this.form.value);
    }
  }
}
