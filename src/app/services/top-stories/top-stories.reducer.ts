import { createReducer, on } from '@ngrx/store';
import * as topStoriesActions from './top-stories.actions';

export interface TopStoriesState {
  topStories: any[];
  loading: boolean;
  error: any;
}

export const initialState: TopStoriesState = {
  topStories: [],
  loading: false,
  error: null,
};

export const topStoriesReducer = createReducer(
  initialState,
  on(topStoriesActions.loadTopStories, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(topStoriesActions.loadTopStoriesSuccess, (state, { topStories }) => ({
    ...state,
    topStories,
    loading: false,
  })),
  on(topStoriesActions.loadTopStoriesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
