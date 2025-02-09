import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  form!: FormGroup;

  ngOnInit(): void {
    const controls: { [key: string]: FormControl } = {};
    this.fields().forEach((field) => {
      const validators = [Validators.minLength(3), Validators.maxLength(8)];
      if (field.required) {
        validators.push(Validators.required);
      }

      controls[field.name] = new FormControl('', validators);
    });

    this.form = new FormGroup(controls);
  }

  onSubmit(): void {
    console.log('hello');
    if (this.form.valid) {
      this.formSubmit.emit();
    }
  }
}
