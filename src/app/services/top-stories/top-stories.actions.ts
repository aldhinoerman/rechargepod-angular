import { createAction, props } from '@ngrx/store';

export const loadTopStories = createAction('[NYTimes API] Load Top Stories');
export const loadTopStoriesSuccess = createAction(
  '[NYTimes API] Load Top Stories Success',
  props<{ topStories: any[] }>()
);
export const loadTopStoriesFailure = createAction(
  '[NYTimes API] Load Top Stories Failure',
  props<{ error: any }>()
);
