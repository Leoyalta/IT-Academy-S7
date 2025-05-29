import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthService: any;
  let mockRouter: any;
  let mockToast: any;

  beforeEach(async () => {
    mockAuthService = {
      register: jasmine.createSpy('register'),
    };
    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };
    mockToast = {
      success: jasmine.createSpy('success'),
      error: jasmine.createSpy('error'),
    };

    await TestBed.configureTestingModule({
      imports: [RegisterComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: HotToastService, useValue: mockToast },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show error toast on registration failure', () => {
    mockAuthService.register.and.returnValue(
      of({ error: 'email already in use' })
    );

    component.registerForm.setValue({
      name: 'John',
      email: 'test@example.com',
      password: '123456',
      repeatPassword: '123456',
      consent: true,
    });

    component.onSubmit();

    expect(mockToast.error).toHaveBeenCalledWith(
      ` Registration failed: email already in use`,
      jasmine.any(Object)
    );
    expect(mockToast.success).not.toHaveBeenCalled();
  });

  it('should navigate on successful registration', () => {
    mockAuthService.register.and.returnValue(of({ user: { uid: 'abc123' } }));

    component.registerForm.setValue({
      name: 'Jane',
      email: 'jane@example.com',
      password: 'abcdef',
      repeatPassword: 'abcdef',
      consent: true,
    });

    component.onSubmit();

    expect(mockToast.success).toHaveBeenCalledWith(
      'Welcome to the movie-app! ✨'
    );
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/moviesList');
  });

  it('should not submit if form is invalid', () => {
    component.registerForm.setValue({
      name: '',
      email: 'invalid',
      password: '123',
      repeatPassword: '456',
      consent: false,
    });

    component.onSubmit();

    expect(mockAuthService.register).not.toHaveBeenCalled();
  });
});
