import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { MessageBoxComponent,AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { MessageBoxService, AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { DashboardComponent } from './dashboard/index';
import { MenuComponent,MenuCategoryComponent } from './menu/index';

@NgModule({ 
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        MessageBoxComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        DashboardComponent,
        MenuComponent,
        MenuCategoryComponent
    ],
    providers: [
        AuthGuard,
        MessageBoxService,
        AlertService,
        AuthenticationService,
        UserService,
        
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }