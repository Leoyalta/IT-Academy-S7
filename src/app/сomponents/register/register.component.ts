import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      consent: new FormControl(false, Validators.requiredTrue),
    },
    { validators: this.passwordsMatchValidator() }
  );

  passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control as FormGroup;
      const password = form.get('userPassword')?.value;
      const repeat = form.get('repeatPassword')?.value;

      return password === repeat ? null : { passwordsMismatch: true };
    };
  }

  onSubmit() {
    console.log('Form value:', this.registerForm.value);
    console.log(`Form status - is valid:`, this.registerForm.valid);
    console.log(`Form controls`, this.registerForm.controls);
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get userEmail() {
    return this.registerForm.get('userEmail');
  }
  get userPassword() {
    return this.registerForm.get('userPassword');
  }
  get repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }

  get consent() {
    return this.registerForm.get('consent');
  }
}
