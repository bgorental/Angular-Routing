import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
// import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


//  const appRoutes : Routes = [
//    {path: '', component: HomeComponent},
//    {path: 'users', component: UsersComponent, children: [
//     {path: ':id/:name', component: UserComponent}
//    ]},
//    {path: 'servers', component: ServersComponent, children:[
//     {path: ':id/edit', component: EditServerComponent},
//     {path: ':id', component: ServerComponent},
//    ]},
//   //  {path: '**', component: PageNotFoundComponent},
//   {path: 'notfound', component: PageNotFoundComponent},
//   {path: '**', redirectTo: '/notfound'}
//  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGaurd, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
