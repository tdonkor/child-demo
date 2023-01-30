import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  // value to pass to child
  userLoggedIn = true;

  // ViewChild references the child component
  @ViewChild(ChildComponent, {static: false}) childComponentRef: ChildComponent;

  ngAfterViewInit(): void {
    this.childComponentRef.message = 'Message from parent component';
  }
}
