import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "../category.component";
import { MoviesCategoryComponent } from "../movies-category/movies-category.component";
import { CreateCategoryComponent } from "../crud/create-category/create-category.component"
import { DeleteCategoryComponent } from "../crud/delete-category/delete-category.component"
import { UpdateCategoryComponent } from "../crud/update-category/update-category.component"



const CATEGORY_ROUTES: Routes = [
    //{ path: "", component: CategoryListComponent },
    { path: "", component: CategoryComponent, children:[
        { path: "movies-category/:id", component:MoviesCategoryComponent},
    ]},
    { path: "create-category", component: CreateCategoryComponent},
    { path: "delete-category", component: DeleteCategoryComponent},
    { path: "update-category", component: UpdateCategoryComponent},
];

export const RoutingCategory: ModuleWithProviders<RouterModule> = RouterModule.forChild(CATEGORY_ROUTES);