import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private jsonURL='http://localhost:4201/api/movie/popular';

  constructor(private http: HttpClient) {}

  getMovies():any {
    return this.http.get(this.jsonURL)
  }
}
