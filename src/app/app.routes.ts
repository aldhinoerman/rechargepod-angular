import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
