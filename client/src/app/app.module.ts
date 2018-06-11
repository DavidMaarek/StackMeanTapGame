import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MeComponent } from './pages/me/me.component';
import { TapComponent } from './pages/tap/tap.component';
import { HeaderComponent } from './partials/header/header.component';
import { UserService } from "./services/user/user.service";
import { GameService } from "./services/game/game.service";
import { CredentialService } from "./services/credential/credential.service";
import { GlobalService } from "./services/global/global.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    TapComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [
    UserService,
    GameService,
    CredentialService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
