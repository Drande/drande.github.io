import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
      },
      {
        path: "about",
        component: AboutPageComponent,
      },
      {
        path: "resume",
        component: ResumePageComponent,
      },
      {
        path: "contact",
        component: ContactPageComponent,
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
  }
];
