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
import {ConnectionService} from "./connection.service";
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { IpdialogComponent } from './ipdialog/ipdialog.component';
import { IpcheckComponent } from './ipcheck/ipcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    PresetViewComponent,
    PresetTileComponent,
    HomeComponent,
    NaviComponent,
    InitComponent,
    LoginComponent,
    ClientHomeComponent,
    ClientChatComponent,
    IpdialogComponent,
    IpcheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [DataService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
