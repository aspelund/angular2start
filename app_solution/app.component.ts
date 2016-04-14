import {Component} from 'angular2/core';
import {MessageForm} from './message_form';
import {Message} from './message';
import {ChatFilter} from './chatFilter';

@Component({
    selector: 'my-app',
    template: `
		<chat-filter [messages]="messages" (filterChange)="filterChange($event)"></chat-filter>
    	<h1>{{title}}</h1>
		<ul><li *ngFor="#message of messages">
			{{message.sender}}: {{message.text}}		
		</li></ul>

		<message-form (sendMessage)="sendMessage($event)"></message-form>

    `,
    directives:[MessageForm, ChatFilter] 
})
export class AppComponent { 
	title = "Hello world!";
	messages: Message[] = [];

	filterChange(person){
		console.log(person);
		this.messages = this.messages.filter( item => {
			return item.sender === person;
		});
	}

	sendMessage(message){
		var newArray = this.messages.map(a => a);		
		newArray.unshift(message);
		this.messages = newArray;
	}
}