import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { DreamsComponent } from "./dreams.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    exports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DreamsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
