import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
  }
];
