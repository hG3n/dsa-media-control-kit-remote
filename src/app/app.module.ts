import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PresetViewComponent } from './preset-view/preset-view.component';
import {AlertModule} from "ng2-bootstrap";
import { PresetComponent } from './preset/preset.component';

@NgModule({
  declarations: [
    AppComponent,
    PresetViewComponent,
    PresetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
