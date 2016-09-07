import { Component } from '@angular/core';
import { OtherComponent, AnotherComponent } from './other';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>Title</h1>
  <h2>Subtitle</h2>
  <app-other>
    <div>
      <h1>h1</h1>
    </div>
  </app-other>
  <app-other></app-other>
  <app-another></app-another>
  <h1>Databinding</h1>
  <app-databinding></app-databinding>
  `,
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent, DatabindingComponent]
})
export class AppComponent {
  title = 'First app works fine!';
}
