import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { LockDirective } from './lock.directive';

@NgModule({
  declarations: [
    AppComponent,
    LockDirective
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
