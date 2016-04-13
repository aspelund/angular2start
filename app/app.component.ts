import {Component} from 'angular2/core';
import {MessageForm} from './message_form';
import {Message} from './message';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
		<ul><li *ngFor="#message of messages">
			{{message.sender}}: {{message.text}}		
		</li></ul>

		<message-form (sendMessage)="sendMessage($event)"></message-form>

    `,
    directives:[MessageForm] 
})
export class AppComponent { 
	title = "Hello world!";
	messages: Message[] = [];

	sendMessage(message){
		this.messages.unshift(message)
	}
}