import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'menu-category',
  templateUrl: 'menu-category.component.html'
})
export class MenuCategoryComponent implements OnInit {

  private sub: any;
  
  constructor(private route: ActivatedRoute, public router : Router) { }

  ngOnInit() { 
        this.sub = this.route.params.subscribe(params => {
          let id = +params['id']; // (+) converts string 'id' to a number
        });
    
  }
  
  
 }