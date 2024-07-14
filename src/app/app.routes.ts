import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: PortfolioPageComponent,
      },
      {
        path: "resume",
        component: ResumePageComponent,
      }
    ],
  },
  {
    path: "**",
    redirectTo: "",
  }
];
