import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopNewsComponent } from "../top-news/top-news.component";
import { SectionWrapperComponent } from "../section-wrapper/section-wrapper.component";
import { PopularArticlesComponent } from "../popular-articles/popular-articles.component";
import { FooterComponent } from "../footer/footer.component";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TopNewsComponent, SectionWrapperComponent, PopularArticlesComponent, FooterComponent, AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
