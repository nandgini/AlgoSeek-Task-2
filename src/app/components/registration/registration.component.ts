import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { VALIDATION_MESSAGES } from './registration.constants';
import { RegistrationForm } from './registration.types';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  validationMessages = VALIDATION_MESSAGES;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.registrationForm.valid) {
      const formData: RegistrationForm = this.registrationForm.value;
      console.log('Form submitted:', formData);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.registrationForm.get(controlName);
    if (control?.errors && (control.dirty || control.touched || this.submitted)) {
      const errors = Object.keys(control.errors);
      if (errors.length > 0) {
        const firstError = errors[0];
        return this.validationMessages[controlName][firstError];
      }
    }
    return '';
  }
}