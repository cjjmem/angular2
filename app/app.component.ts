    import { Component } from '@angular/core';
    @Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2dasdas App</h1>'
    })
    export class AppComponent { }


    @Component({
        selector: 'loop-back',
        template:`
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
    })
    export class LoopbackComponent { }




