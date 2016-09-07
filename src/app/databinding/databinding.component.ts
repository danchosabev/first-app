import { Component, Input } from '@angular/core';
import { PropertyBindingComponent } from './property-binding'
import { EventBindingComponent } from './event-binding'

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent]
})
export class DatabindingComponent {
 stringInterpolation = "This is string interpolation.";
 numberInterpolation = 2;
 @Input() result: number = 0;

 onClicked(value:string) {
   alert(value);
 }   
}
