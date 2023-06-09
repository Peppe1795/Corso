import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { Movies } from 'src/app/models/movies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies: Movies[] = [];

constructor(private filmSrv: FilmService) { }

  ngOnInit(): void {
    this.filmSrv.getMovies().subscribe((data:any)=> {
      this.movies = data;
      console.log(data)
    })
  }

}
