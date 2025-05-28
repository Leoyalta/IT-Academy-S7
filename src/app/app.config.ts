import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../assets/environments/environments';
import { provideRouter } from '@angular/router';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideHttpClient(),
    provideHotToastConfig({
      position: 'top-right',
      duration: 3000,
      dismissible: true,
      style: {
        background: 'linear-gradient(135deg, #222428, #1e1e1e)',
        color: '#c7c4b0',
        border: '1px solidrgb(194, 183, 91)',
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(204, 190, 100, 0.54)',
        fontWeight: '500',
        // fontFamily: ,
      },
    }),
  ],
};
