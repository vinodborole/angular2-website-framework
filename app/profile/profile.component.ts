import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { MessageBoxService,UserService} from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
 
export class ProfileComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private messageboxService: MessageBoxService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}