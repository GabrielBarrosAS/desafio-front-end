import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/util/dtos/MovieDtos';
import { ModalGenericService } from 'src/app/util/shared/modal-generic/modal-generic.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(
    private movieService: MoviesService,
    private modalService: BsModalService,
    private modalGenericService:ModalGenericService) { }

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
        this.modalGenericService.showModal("Filme deletado com sucesso!")
        this.movieService.getMovies().subscribe(data => this.movieAll = data)
        this.idDelete = -1
      },
      error: () => this.modalGenericService.showModal("Erro ao deletar filme!")
    })
    this.declineDelete()
  }

  declineDelete() {
    this.deleteModalRef?.hide()
  }
}
