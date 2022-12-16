import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GaleriComponent } from './components/galeri/galeri.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { GaleriDuaComponent } from './components/galeri-dua/galeri-dua.component';
import { FormsModule } from '@angular/forms';
import { PbbComponent } from './components/pbb/pbb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './components/todo/todo.component';
import { RestoranComponent } from './components/restoran/restoran.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    UserComponent,
    NavbarComponent,
    HeroComponent,
    GaleriComponent,
    PostdetailComponent,
    GaleriDuaComponent,
    PbbComponent,
    TodoComponent,
    RestoranComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
