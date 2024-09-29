import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TopStoriesState } from './top-stories.reducer';

export const selectTopStoriesState =
  createFeatureSelector<TopStoriesState>('topstories');

export const selectTopStories = createSelector(
  selectTopStoriesState,
  (state: TopStoriesState) => state.topStories
);

export const selectLoading = createSelector(
  selectTopStoriesState,
  (state: TopStoriesState) => state.loading
);

export const selectError = createSelector(
  selectTopStoriesState,
  (state: TopStoriesState) => state.error
);
