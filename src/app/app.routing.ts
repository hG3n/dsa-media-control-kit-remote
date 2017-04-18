import {Routes, RouterModule} from "@angular/router";
import {InitComponent} from "./init/init.component";
import {PresetViewComponent} from "./preset-view/preset-view.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ClientHomeComponent} from "./client-home/client-home.component";
import {IpdialogComponent} from "./ipdialog/ipdialog.component";
import {IpcheckComponent} from "./ipcheck/ipcheck.component";
import {SelectHomeComponent} from "./home-select/home-select.component";
import {MasterHomeComponent} from "./master-home/master-home.component";
import {ClientChatComponent} from "./client-chat/client-chat.component";

const app_routes: Routes = [
  {
    path: '',
    redirectTo: 'init/ipdialog',
    pathMatch: 'full',
  },
  {
    path: 'init',
    component: InitComponent,
    children: [
      {
        path: 'ipdialog',
        component: IpdialogComponent
      },
      {
        path: 'ip/:ip',
        component: IpcheckComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'select',
        component: SelectHomeComponent
      },
      {
        path: 'master',
        component: MasterHomeComponent,
        children: [
          {
            path: 'presets',
            component: PresetViewComponent
          }
        ]
      },
      {
        path: 'client',
        component: ClientHomeComponent,
        children: [
          {
            path: 'chat',
            component: ClientChatComponent
          }
        ]
      }
    ]
  }
];

export const routing = RouterModule.forRoot(app_routes);
