import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default bg-faded">
    <div class="container">
      <a class="navbar-brand center" href="#">PeerBuds Task</a>
      <a href="/" class="btn btn-primary navbar-btn pull-right"> Home</a>

    </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
