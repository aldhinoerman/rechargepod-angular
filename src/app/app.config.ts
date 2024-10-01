import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { topStoriesReducer } from './services/top-stories/top-stories.reducer';
import { TopStoriesEffects } from './services/top-stories/top-stories.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PopularArticlesEffects } from './services/popular-articles/popular-articles.effects';
import { popularArticlesReducer } from './services/popular-articles/popular-articles.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore({
      topstories: topStoriesReducer,
      popular_articles: popularArticlesReducer,
    }),
    provideEffects([TopStoriesEffects, PopularArticlesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
