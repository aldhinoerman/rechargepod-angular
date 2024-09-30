import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopStories } from '../services/top-stories/top-stories.selectors';
import * as topStoriesActions from '../services/top-stories/top-stories.actions';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-news',
  standalone: true,
  imports: [SectionWrapperComponent, CommonModule],
  templateUrl: './top-news.component.html',
  styleUrl: './top-news.component.scss',
})
export class TopNewsComponent implements OnInit {
  topStories$: Observable<any[]>;

  constructor(private store: Store) {
    this.topStories$ = this.store.pipe(select(selectTopStories));
  }

  ngOnInit(): void {
    this.topStories$.subscribe((topStories) => {
      if (!topStories || topStories.length === 0) {
        this.store.dispatch(topStoriesActions.loadTopStories());
      }
    });
  }
}
