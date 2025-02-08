import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../types/form';
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

  formSubmit = output<void>();

  formState = signal<{ [key: string]: string | boolean }>({});

  ngOnInit(): void {
    const initialState: { [key: string]: string | boolean } = {};
    this.fields().forEach((field) => {
      initialState[field.name] === 'checkbox' ? false : '';
    });
    this.formState.set(initialState);
  }

  isFormValid = computed(() => this.fields().every((field) => !field.required || !!this.formState()[field.name]));

  onSubmit(): void {
    if (this.isFormValid()) {
      this.formSubmit.emit();
    }
  }
}
