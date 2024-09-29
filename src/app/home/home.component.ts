import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as topStoriesActions from '../services/top-stories/top-stories.actions';
import {
  selectError,
  selectLoading,
  selectTopStories,
} from '../services/top-stories/top-stories.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SectionWrapperComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  topStories$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.topStories$ = this.store.pipe(select(selectTopStories));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.topStories$.subscribe((topStories) => {
      if (!topStories || topStories.length === 0) {
        this.store.dispatch(topStoriesActions.loadTopStories());
      }
    });
  }
}
