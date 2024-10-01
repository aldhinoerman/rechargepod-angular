import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularArticlesService } from './popular-articles.service';
import * as PopularArticlesActions from './popular-articles.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PopularArticlesEffects {
  loadPopularArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PopularArticlesActions.loadPopularArticles),
      mergeMap(() =>
        this.popularArticlesService.fetchPopularArticles().pipe(
          map((data) =>
            PopularArticlesActions.loadPopularArticlesSuccess({
              popularArticles: data.results,
            })
          ),
          catchError((error) =>
            of(PopularArticlesActions.loadPopularArticlesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private popularArticlesService: PopularArticlesService
  ) {}
}
