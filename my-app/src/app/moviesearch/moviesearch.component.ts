import { Component, OnInit } from '@angular/core';
import { DemotaskService } from '../app/services/demotask.service';

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent implements OnInit {

  movies: any[] = [];
  searchBar: string = '';

  constructor(private movieService: DemotaskService) {}
  ngOnInit(): void {
  
  }

  searchMovies() {
    if (this.searchBar) {
      this.movieService.searchMovies(this.searchBar).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
  

}
