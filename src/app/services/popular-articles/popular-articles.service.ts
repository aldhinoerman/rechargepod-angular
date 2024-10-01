import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PopularArticlesService {
  private apiKey = environment.apiKey;
  private apiUrl =
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' +
    this.apiKey;

  constructor(private http: HttpClient) {}

  fetchPopularArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
