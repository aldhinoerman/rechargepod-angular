import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss'],
})
export class SectionWrapperComponent {
  @Input() id!: string;
}
