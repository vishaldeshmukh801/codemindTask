import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemotaskService {
  private apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private _httpClient: HttpClient) {
    
  }
  
   
  getMovies(): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = {
      api_key: this.apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
      with_watch_monetization_types: 'flatrate',
    };

    return this._httpClient.get(url, { params });
  }
  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this._httpClient.get(url);
  }
}

