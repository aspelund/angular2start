import {Component, Output, EventEmitter} from 'angular2/core';
import {Message} from './message';

@Component({
	selector: 'message-form',
	template: `<form>
		<label>Text:</label>
		<input type='text' [(ngModel)]="text"/><br/>
	
		<label>Sender:</label>
		<input type='text' [(ngModel)]="sender"/><br/>
		
		<button (click)="onClick()">Send</button>
	</form>`,
	styles: [`
		form {			
			margin:10px;
			background:#f0f0f0;
			display:inline-block;
			width:400px;
			padding:30px;
			border-radius:10px;
		}
		label {
			display:block;
			margin:5px;
		}
		button {
			margin-top:10px;
			padding:5px;
		}
	`]
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