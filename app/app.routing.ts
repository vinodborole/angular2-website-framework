import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { DashboardComponent } from './dashboard/index';
import { MenuComponent,MenuCategoryComponent } from './menu/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], 
     children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path:'profile',
                component: ProfileComponent
            },
            {
                path:'nav/:id',
                component: MenuCategoryComponent
            }, 
            {
                path: '',
                outlet: 'menu',
                component: MenuComponent
            }
        ] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
      // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);