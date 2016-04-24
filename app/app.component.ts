import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    `,
    directives:[] 
})
export class AppComponent { 
	title = "Hello world!";
}