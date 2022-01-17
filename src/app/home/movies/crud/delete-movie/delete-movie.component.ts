import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/util/dtos/MovieDtos';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private movieService: MoviesService, private modalService: BsModalService) { }

  deleteModalRef: BsModalRef | undefined;
  @ViewChild('deleteModal') deleteModal: any;

  movieAll: MovieDetail[] = []
  idUpdate = -1
  idDelete = -1

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => this.movieAll = data)
  }

  updateSelected(id: number) {
    this.movieService.getMovies().subscribe(data => this.movieAll = data)
    this.idUpdate = id
  }

  deleteMovie(id: number) {
    this.idDelete = id
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
  }

  confirmDelete() {
    this.movieService.delete(this.idDelete).subscribe({
      next: () => {
        alert(`Deletado com sucesso`)
        this.movieService.getMovies().subscribe(data => this.movieAll = data)
        this.idDelete = -1
      },
      error: () => alert(`Erro ao deletar`)
    })
    this.declineDelete()
  }

  declineDelete() {
    this.deleteModalRef?.hide()
  }
}
