
// This is a demo for @Input using a getter and setter
// the Input logged in will get its value from the parent
// AppComponent

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  // child expecting a value
 //  @Input() loggedIn: boolean; - old @Input getter and setter does the same thing
  // tslint:disable-next-line:variable-name
  private _loggedIn: boolean; //  - add a private property for the getter/setter
 // @Input() loggedIn: boolean;
  message: string;
  name = 'Thomas';

  // getter
  get loggedIn(): boolean {
    return this._loggedIn;
  }

   // setter an Input property allows us to intercept the value change and execute additional lines of code.
  @Input()
   set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value === true) {
      this.message = 'Welcome back Thomas!';
    } else {
      this.message = 'Please log in';
    }
   }

  constructor() { }

  // access properties and components directly in the parent component using
  // template reference variables
  greetThomas() {
    alert('Hey Thomas');
  }


 // only works with child containers  use getters or setters
  ngOnChanges(changes: SimpleChanges): void {

     console.log(changes);
     // same as the getter/setter
  //    const loggedInValue = changes.loggedIn;
  //    if (loggedInValue.currentValue === true){
  //      this.message = 'Welcome back Thomas!';
  //     } else {
  //       this.message = 'Please log in';
  //     }
  //
   }

}
