import {Component, Output, EventEmitter} from 'angular2/core';
import {Message} from './message';

@Component({
	selector: 'message-form',
	template: `<div>
	<label>Text:</label><input type='text' [(ngModel)]="text"/><br/>
	<label>Sender:</label><input type='text' [(ngModel)]="sender"/><br/>
	<button (click)="onClick()">Send</button>
	</div>` 
})
export class MessageForm {
	@Output() sendMessage = new EventEmitter<Message>();
	text = '';
	sender = '';

	onClick(){
		if(this.text && this.sender){
			this.sendMessage.next({text:this.text, sender:this.sender });
		}
		this.text = '';
		this.sender = '';
	}
}