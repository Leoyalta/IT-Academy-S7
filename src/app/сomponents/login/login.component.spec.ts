import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HotToastService } from '@ngxpert/hot-toast';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: any;
  let mockRouter: any;
  let mockToast: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login').and.returnValue(of({})),
    };
    mockRouter = {
      navigateByUrl: jasmine.createSpy('moviesList'),
    };
    mockToast = {
      success: jasmine.createSpy('success'),
      error: jasmine.createSpy('error'),
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: HotToastService, useValue: mockToast },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form with two controls', () => {
    const form = component.loginForm;
    expect(form.contains('email')).toBeTrue();
    expect(form.contains('password')).toBeTrue();
  });

  it('should invalidate form when empty', () => {
    component.loginForm.setValue({ email: '', password: '' });
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should validate email format', () => {
    component.loginForm.controls['email'].setValue('invalid-email');
    expect(component.loginForm.controls['email'].valid).toBeFalse();
  });

  it('should call AuthService.login on valid form submission', () => {
    component.loginForm.setValue({
      email: 'test@mail.com',
      password: '123456',
    });
    component.onSubmit();
    expect(mockAuthService.login).toHaveBeenCalledWith(
      'test@mail.com',
      '123456'
    );
  });

  it('should navigate on successful login', () => {
    component.loginForm.setValue({
      email: 'test@mail.com',
      password: '123456',
    });
    component.onSubmit();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/moviesList');
  });
});
