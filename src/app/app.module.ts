import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService }    from './app.service'
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService, HttpClientModule]
})
export class AppModule { }
