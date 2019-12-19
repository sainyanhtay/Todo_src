import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './common/common.scss']
})
export class AppComponent {
  title = 'angular-project';

  add(event) {
    console.log('event > ', event)
  }
}
