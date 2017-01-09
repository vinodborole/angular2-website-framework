import { Component, OnInit} from '@angular/core';

import { MessageBoxService } from '../_services/index';
 
@Component({ 
    moduleId: module.id,
    selector: 'messagebox',
    templateUrl: 'messagebox.component.html'
})

export class MessageBoxComponent {
    message: any;
    constructor(private messageBoxService: MessageBoxService) { }

    ngOnInit() {
        this.messageBoxService.getMessage().subscribe(message => { this.message = message; });
    }
  
    close(){
      this.messageBoxService.clear();
    }
}