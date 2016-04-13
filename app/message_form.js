System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MessageForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageForm = (function () {
                function MessageForm() {
                    this.sendMessage = new core_1.EventEmitter();
                    this.text = '';
                    this.sender = '';
                }
                MessageForm.prototype.onClick = function () {
                    if (this.text && this.sender) {
                        this.sendMessage.next({ text: this.text, sender: this.sender });
                    }
                    this.text = '';
                    this.sender = '';
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageForm.prototype, "sendMessage", void 0);
                MessageForm = __decorate([
                    core_1.Component({
                        selector: 'message-form',
                        template: "<div>\n\t<label>Text:</label><input type='text' [(ngModel)]=\"text\"/><br/>\n\t<label>Sender:</label><input type='text' [(ngModel)]=\"sender\"/><br/>\n\t<button (click)=\"onClick()\">Send</button>\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageForm);
                return MessageForm;
            }());
            exports_1("MessageForm", MessageForm);
        }
    }
});
//# sourceMappingURL=message_form.js.map