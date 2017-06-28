import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
