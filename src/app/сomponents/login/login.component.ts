import { Component } from '@angular/core';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    console.log('Form value:', this.loginForm.value);
    console.log(`Form status - is valid:`, this.loginForm.valid);
    console.log(`Form controls`, this.loginForm.controls);
  }
  get userEmail() {
    return this.loginForm.get('userEmail');
  }

  get userPassword() {
    return this.loginForm.get('userPassword');
  }
}
