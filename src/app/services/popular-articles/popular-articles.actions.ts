import { createAction, props } from '@ngrx/store';

export const loadPopularArticles = createAction(
  '[NYTimes API] Load Popular Articles'
);
export const loadPopularArticlesSuccess = createAction(
  '[NYTimes API] Load Popular Articles Success',
  props<{ popularArticles: any[] }>()
);
export const loadPopularArticlesFailure = createAction(
  '[NYTimes API] Load Popular Articles Failure',
  props<{ error: any }>()
);
