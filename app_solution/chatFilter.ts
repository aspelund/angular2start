import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Message} from "./message";

@Component({
	selector: "chat-filter",
	template: `Select a person: 
	
	{{messages}}

	<select [(ngModel)]="selectedPerson" (ngModelChange)="emitChange($event)">
		<option *ngFor="#person of persons" [value]="person">{{person}}</option>
	</select>

	{{selectedPerson}}

	`
})

export class ChatFilter {
	@Input() messages : Message[];
	@Output() filterChange = new EventEmitter<String>();

	selectedPerson = "";
	persons = [];

	emitChange(){
		this.filterChange.next(this.selectedPerson);
	}

	ngOnChanges(){
		this.persons = this.messages.reduce((prev, cur)=>{
			var personArray = prev;
			if(personArray.indexOf(cur.sender) < 0){
				personArray.push(cur.sender);
			}
			return prev;
		}, []);

	}

}