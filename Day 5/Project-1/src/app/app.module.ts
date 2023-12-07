import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FormsModule } from '@angular/forms';
import { TimeFormatPipe } from './time-format.pipe';
import { PowerPipe } from './power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe,
    ExponentialStrengthPipe,
    TimeFormatPipe,
    PowerPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
