import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { VideoListDirective } from './video-list/video-list.directive';
import { WhileDirective } from './header/header.while.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatMenuModule } from '@angular/material/menu';

import { AboutComponent } from './about/about.component';
import { AboutGuard } from './about/about.guard';

const appRouts: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  { path: 'auth', component: AuthorizationComponent },
  { path: 'about', component: AboutComponent, canActivate: [AboutGuard] },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent,
    FooterComponent,
    MainComponent,
    VideoListDirective,
    WhileDirective,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    MatMenuModule,
  ],
  providers: [AboutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
