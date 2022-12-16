import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'postdetail', component: PostdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
