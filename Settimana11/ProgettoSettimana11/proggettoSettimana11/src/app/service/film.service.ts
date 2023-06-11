import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../auth/data.interface';
import { AuthService } from '../auth/auth.service';
import { Favoriti } from '../models/favoriti.interface';


@Injectable({
  providedIn: 'root',
})
export class FilmService {

  private jsonURL = 'http://localhost:4201/api/movie/popular';


  constructor(private http: HttpClient, private authSrv: AuthService) {}

  getMovies(): any {
    return this.http.get(this.jsonURL);
  }


}
