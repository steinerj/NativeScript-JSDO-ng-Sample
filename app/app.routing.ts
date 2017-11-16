import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "items", component: ItemsComponent, canActivate: [AuthGuardService]},
    { path: "item/:id", component: ItemDetailComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }