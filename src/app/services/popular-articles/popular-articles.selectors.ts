import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularArticlesState } from './popular-articles.reducer';

export const selectPopularArticlesState =
  createFeatureSelector<PopularArticlesState>('popular_articles');

export const selectPopularArticles = createSelector(
  selectPopularArticlesState,
  (state: PopularArticlesState) => state.popularArticles
);

export const selectLoading = createSelector(
  selectPopularArticlesState,
  (state: PopularArticlesState) => state.loading
);

export const selectError = createSelector(
  selectPopularArticlesState,
  (state: PopularArticlesState) => state.error
);
