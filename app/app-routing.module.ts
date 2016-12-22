import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { DreamsComponent } from "./dreams.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dreams', component: DreamsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}