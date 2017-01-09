import { Component } from '@angular/core';

import { User } from '../_models/index';
import { MessageBoxService,UserService} from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
 
export class DashboardComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }
   
   /*
   navigate(path) {
        this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
                             {relativeTo: this.route});
    }
   */
}