import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  
   { path: 'posts' , component: PostsComponent },

   { path: 'users' , component: UsersComponent },
   
   { path: '**' , component: NotfoundComponent},

   { path: '', redirectTo: '/posts', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
