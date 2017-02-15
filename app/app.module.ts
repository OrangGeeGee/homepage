import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { DreamsComponent } from "./dreams.component";
import { StoryComponent } from "./story.component";

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
        DreamsComponent,
        StoryComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
