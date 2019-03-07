import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeScreenComponent } from './modules/home-screen/home-screen.component';
import { A320Component } from './modules/a320/a320.component';
import { A330Component } from './modules/a330/a330.component';
import { A350Component } from './modules/a350/a350.component';
import { SearchFilterComponent } from './modules/search-filter/search-filter.component';

const routes: Routes = [

  {path:'',component:HomeScreenComponent},
  {path:'a320',component:A320Component},
  {path:'a330',component:A330Component},
  {path:'a350',component:A350Component},
  {path:'search',component:SearchFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
