import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { selectPopularArticles } from '../services/popular-articles/popular-articles.selectors';
import { select, Store } from '@ngrx/store';
import * as popularArticlesActions from '../services/popular-articles/popular-articles.actions';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-popular-articles',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './popular-articles.component.html',
  styleUrl: './popular-articles.component.scss',
})
export class PopularArticlesComponent implements OnInit {
  popularArticles$: Observable<any[]> = this.store.pipe(
    select(selectPopularArticles),
    map((articles) => articles.slice(0, 9))
  );

  @ViewChildren('cardPopular') cardPopulars!: QueryList<ElementRef>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.popularArticles$.subscribe((popularArticles) => {
      if (!popularArticles || popularArticles.length === 0) {
        this.store.dispatch(popularArticlesActions.loadPopularArticles());
      }
    });
  }

  ngAfterViewInit(): void {
    this.cardPopulars.forEach((card: ElementRef) => {
      const image = card.nativeElement.querySelector('img');
      const titleContainer = card.nativeElement.querySelector('.bg-primary');

      card.nativeElement.addEventListener('mouseenter', () => {
        gsap.to(image, {
          y: -20,
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(titleContainer, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.in',
        });
      });

      card.nativeElement.addEventListener('mouseleave', () => {
        gsap.to(image, { y: 0, scale: 1, duration: 0.3, ease: 'power2.in' }); // Reset image
        gsap.to(titleContainer, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }
}
