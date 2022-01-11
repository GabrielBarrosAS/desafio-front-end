import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateMovieComponent } from "../crud/create-movie/create-movie.component"
import { DeleteMovieComponent } from "../crud/delete-movie/delete-movie.component"
import { UpdateMovieComponent } from "../crud/update-movie/update-movie.component"
import { MoviesComponent } from "../movies.component";



const MOVIES_ROUTES: Routes = [
    { path: "", component: MoviesComponent},
    { path: "create-movie", component: CreateMovieComponent},
    { path: "delete-movie", component: DeleteMovieComponent},
    { path: "update-movie", component: UpdateMovieComponent},
];

export const RoutingMovies: ModuleWithProviders<RouterModule> = RouterModule.forChild(MOVIES_ROUTES);