import { Component, OnInit} from '@angular/core';

import { User } from '../_models/index';
import { MessageBoxService,UserService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private messageboxService: MessageBoxService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
     
    logout() {
      //Are you sure you want to log out? <p>Press No if you want to continue work. Press Yes to logout current user.</p>',"signout", "Log <strong>Out</strong>?
      this.messageboxService.alert('Are you sure you want to log out?',"signout", "Log Out?");
    }
  

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}