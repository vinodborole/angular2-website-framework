import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit{
  currentUser: User;
 
  id: number;
  
  constructor() {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
       
  }
  
  private loadAllUsers() {
       
  }
  
 
  
}