import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './modules/test/test.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeScreenComponent } from './modules/home-screen/home-screen.component';
import { HeaderComponent } from './shared/header/header.component';
import { A320Component } from './modules/a320/a320.component';
import { A330Component } from './modules/a330/a330.component';
import { A350Component } from './modules/a350/a350.component';
import { SearchFilterComponent } from './modules/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    HomeScreenComponent,
    HeaderComponent,
    A320Component,
    A330Component,
    A350Component,
    SearchFilterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent]
})
export class AppModule { }
