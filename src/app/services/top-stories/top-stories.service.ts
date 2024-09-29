import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TopStoriesService {
  private apiKey = environment.apiKey;
  private apiUrl =
    'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=' +
    this.apiKey;

  constructor(private http: HttpClient) {}

  fetchTopStories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
