import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(HotToastService);

  registerForm = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
      consent: [false, Validators.requiredTrue],
    },
    { validators: this.passwordsMatchValidator() }
  );

  passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const repeat = group.get('repeatPassword')?.value;
      return password === repeat ? null : { passwordsMismatch: true };
    };
  }

  onSubmit(): void {
    if (!this.registerForm.valid) return;

    const { email, password } = this.registerForm.getRawValue();

    this.authService.register(email, password).subscribe((result) => {
      if ('error' in result) {
        this.toast.error(` Registration failed: ${result.error}`, {
          position: 'top-right',
          duration: 3000,
        });
      } else {
        this.toast.success('Welcome to the movie-app! ✨');
        this.router.navigateByUrl('/moviesList');
      }
    });
  }
}
