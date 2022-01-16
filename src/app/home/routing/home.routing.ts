import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home.component"


const HOME_ROUTES: Routes = [
    { path: "", component: HomeComponent }
];

export const home_routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(HOME_ROUTES);