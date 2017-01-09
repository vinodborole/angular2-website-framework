import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class MessageBoxService {
    private subject = new Subject<any>();
  
    alert(message: string, alertType: string, alertTitle: string ) {
        this.subject.next({ type: alertType, text: message, title: alertTitle });
    }

    success(message: string) {
        this.subject.next({ type: 'success', text: message, title: 'Success' });
    }

    error(message: string) {
        this.subject.next({ type: 'error', text: message, title: 'ERROR!' });
    }
  
    info(message: string) {
        this.subject.next({ type: 'info', text: message, title: 'Information' });
    }
  
    warning(message: string) {
       this.subject.next({ type: 'warning', text: message, title: 'Warning' });
    }
    
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  
    clear(){
      this.subject.next();
    }
    
}