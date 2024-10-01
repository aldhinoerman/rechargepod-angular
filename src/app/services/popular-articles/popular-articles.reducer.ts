import { createReducer, on } from '@ngrx/store';
import * as popularArticlesActions from './popular-articles.actions';

export interface PopularArticlesState {
  popularArticles: any[];
  loading: boolean;
  error: any;
}

export const initialState: PopularArticlesState = {
  popularArticles: [],
  loading: false,
  error: null,
};

export const popularArticlesReducer = createReducer(
  initialState,
  on(popularArticlesActions.loadPopularArticles, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    popularArticlesActions.loadPopularArticlesSuccess,
    (state, { popularArticles }) => ({
      ...state,
      popularArticles,
      loading: false,
    })
  ),
  on(popularArticlesActions.loadPopularArticlesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
