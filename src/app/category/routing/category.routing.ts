import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryListComponent } from "../category-list/category-list.component";
import { MoviesCategoryComponent } from "../movies-category/movies-category.component";


const CATEGORY_ROUTES: Routes = [
    //{ path: "", component: CategoryListComponent },
    { path: "movies-category/:id", component:MoviesCategoryComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(CATEGORY_ROUTES);