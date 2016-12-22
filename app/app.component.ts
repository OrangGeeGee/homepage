import { Component } from "@angular/core";
import { Router } from "@angular/router";
require('./app.component.scss');

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private router: Router) {
    }

    goToDreams() {
        this.router.navigate(['/dreams'])
            .then(r => console.log('navigate success', r))
            .catch(r => console.log('navigate fail', r));
    }
}
