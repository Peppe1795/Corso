import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { Movies } from 'src/app/models/movies.interface';
import { Favoriti } from 'src/app/models/favoriti.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  favorites: Favoriti[] | undefined;
  favorite!: Favoriti;

  constructor(private filmSrv: FilmService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.filmSrv.getMovies().subscribe((data: any) => {
      this.movies = data;
      console.log(data);
    });
    this.filmSrv.getFavorites().subscribe((favorites: Favoriti[]) => {
      this.favorites = favorites;
      console.log('Film preferiti dagli utenti:', this.favorites);
    });
  }
  gestisciPreferito(movieID: number) {
    const userId = this.authSrv.getCurrentUserId();
    const isFavorito = this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );

    if (isFavorito) {
      this.filmSrv.eliminaFavorites(isFavorito.id).subscribe(() => {
        console.log('Film preferito rimosso con successo');
        console.log('Film preferiti dagli utent:', this.favorites);
        const favoriteIndex = this.favorites!.indexOf(isFavorito);
        if (favoriteIndex !== -1) {
          this.favorites!.splice(favoriteIndex, 1);
        }
      });
    } else {
      const newFavorite: Favoriti = {
        userId: userId!,
        movieId: movieID,
        id: 0,
      };
      this.filmSrv
        .aggiungiFavorites(newFavorite)
        .subscribe((favorite: Favoriti) => {
          this.favorites!.push(favorite);
          console.log('Film preferito aggiunto con successo:', favorite);
          console.log('Film preferiti dagli utenti:', this.favorites);
        });
    }
  }

  isPreferito(movieID: number): boolean {
    const userId = this.authSrv.getCurrentUserId();
    return !!this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );
  }
}
