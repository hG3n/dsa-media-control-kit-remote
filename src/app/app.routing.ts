import {Routes, RouterModule} from "@angular/router";
import {InitComponent} from "./init/init.component";
import {PresetViewComponent} from "./preset-view/preset-view.component";
import {HomeComponent} from "./home/home.component";

const app_routes: Routes = [
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full',
  },
  {
    path: 'init',
    component: InitComponent
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
  }
];

export const routing = RouterModule.forRoot(app_routes, {useHash: true});
