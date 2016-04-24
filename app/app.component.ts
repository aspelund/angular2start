import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    `,
    directives:[MessageForm] 
})
export class AppComponent { 
	title = "Hello world!";
}