import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PresetViewComponent} from './preset-view/preset-view.component';
import {AlertModule} from "ng2-bootstrap";
import {PresetTileComponent} from './preset-tile/preset-tile.component';
import {HomeComponent} from './home/home.component';
import {NaviComponent} from './navi/navi.component';
import {InitComponent} from './init/init.component';
import {routing} from "./app.routing";
import {RequestHandlerService} from "./services/request-handler.service";
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    PresetViewComponent,
    PresetTileComponent,
    HomeComponent,
    NaviComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
