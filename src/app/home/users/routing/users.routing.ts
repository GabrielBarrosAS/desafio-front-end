import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "../crud/create-user/create-user.component";
import { DeleteUserComponent } from "../crud/delete-user/delete-user.component";
import { UpdateUserComponent } from "../crud/update-user/update-user.component";



const USERS_ROUTES: Routes = [
    { path: "create-users", component: CreateUserComponent },
    { path: "delete-users", component: DeleteUserComponent },
    { path: "update-users", component: UpdateUserComponent },
];

export const RoutingUsers: ModuleWithProviders<RouterModule> = RouterModule.forChild(USERS_ROUTES);