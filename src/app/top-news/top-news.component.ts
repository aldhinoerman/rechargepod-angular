import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewChecked,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopStories } from '../services/top-stories/top-stories.selectors';
import * as topStoriesActions from '../services/top-stories/top-stories.actions';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-top-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit, AfterViewChecked {
  topStories$: Observable<any[]> = this.store.pipe(select(selectTopStories));
  topStoriesLoaded = false;

  @ViewChild('marqueeText', { static: true }) marqueeText!: ElementRef;
  @ViewChildren('topCard') topCards!: QueryList<ElementRef>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.topStories$.subscribe((topStories) => {
      if (!topStories || topStories.length === 0) {
        this.store.dispatch(topStoriesActions.loadTopStories());
      } else if (topStories.length > 0) {
        this.topStoriesLoaded = true;
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.topStoriesLoaded) {
      this.runMarquee();
      this.topStoriesLoaded = false;

      this.topCards.forEach((topCard: ElementRef) => {
        const element = topCard.nativeElement;

        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            backgroundColor: '#f2d556',
            backgroundPosition: '0% 100%',
            rotateX: -10,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            backgroundColor: '#e4e1db',
            backgroundPosition: '0% 0%',
            rotateX: 0,
            duration: 0.3,
            ease: 'power2.in',
          });
        });
      });
    }
  }

  runMarquee(): void {
    const marqueeWidth = this.marqueeText.nativeElement.scrollWidth;

    if (!isNaN(marqueeWidth) && marqueeWidth > 0) {
      gsap.to(this.marqueeText.nativeElement, {
        x: -marqueeWidth,
        duration: 700,
        ease: 'linear',
        repeat: -1,
      });
    } else {
      console.error('Invalid marquee width:', marqueeWidth);
    }
  }
}
