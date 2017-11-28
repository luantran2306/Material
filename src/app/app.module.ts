import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { TableBasicExample }  from './table-basic-example';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  declarations: [
    TableBasicExample,
  ],
  bootstrap: [ TableBasicExample ]
})
export class AppModule { }
