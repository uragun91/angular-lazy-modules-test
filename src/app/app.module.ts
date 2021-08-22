import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  declarations: [AppComponent, HelloComponent, EntryComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
