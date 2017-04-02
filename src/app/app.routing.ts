import {Routes, RouterModule} from "@angular/router";
import {InitComponent} from "./init/init.component";
import {PresetViewComponent} from "./preset-view/preset-view.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ClientHomeComponent} from "./client-home/client-home.component";
import {IpdialogComponent} from "./ipdialog/ipdialog.component";
import {IpcheckComponent} from "./ipcheck/ipcheck.component";

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
    component: HomeComponent
  },
  {
    path: 'home/:ip',
    component: HomeComponent
  },
  {
    path: 'presets',
    component: PresetViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home-client',
    component: ClientHomeComponent
  }
];

export const routing = RouterModule.forRoot(app_routes);
