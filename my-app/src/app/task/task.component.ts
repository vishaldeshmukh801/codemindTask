import { Component, OnInit } from '@angular/core';
import { DemotaskService } from '../app/services/demotask.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  movies: any[] | undefined;

  constructor(private movieService:  DemotaskService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
