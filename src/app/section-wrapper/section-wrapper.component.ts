import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss'],
})
export class SectionWrapperComponent implements AfterViewInit {
  @Input() id!: string;

  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    gsap.to(this.sectionContainer.nativeElement, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }
}
