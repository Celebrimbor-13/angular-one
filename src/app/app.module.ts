import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ProgressComponent } from './progress/progress.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, ProgressComponent, DoneComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
