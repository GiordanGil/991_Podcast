import { Routes } from "@angular/router";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { DefaultComponent } from "./default/default.component";

export const AppRoutes : Routes = [
    {path: '', component: DefaultComponent},
    {path: 'c1', component: C1Component},
    {path: 'c2/:id', component: C2Component}
]