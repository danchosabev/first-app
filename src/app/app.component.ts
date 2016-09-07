import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>Title</h1>
  <h2>Subtitle</h2>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'First app works fine!';
}
