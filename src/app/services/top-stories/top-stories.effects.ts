import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TopStoriesService } from './top-stories.service';
import * as TopStoriesActions from './top-stories.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TopStoriesEffects {
  loadTopStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TopStoriesActions.loadTopStories),
      mergeMap(() =>
        this.topStoriesService.fetchTopStories().pipe(
          map((data) =>
            TopStoriesActions.loadTopStoriesSuccess({
              topStories: data.results,
            })
          ),
          catchError((error) =>
            of(TopStoriesActions.loadTopStoriesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private topStoriesService: TopStoriesService
  ) {}
}
