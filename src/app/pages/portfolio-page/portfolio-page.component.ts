import { Component } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProjectsPageComponent } from '../projects-page/projects-page.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    HomePageComponent, ContactPageComponent, AboutPageComponent, ProjectsPageComponent,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
