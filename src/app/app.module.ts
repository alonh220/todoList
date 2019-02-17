import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { TodolistModule } from './modules/todolist/todolist.module';

import { todoListReducer } from './stores/todoList.reducer';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ContentComponent } from './shared/layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TodolistModule,
    StoreModule.forRoot({ todoList: todoListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
