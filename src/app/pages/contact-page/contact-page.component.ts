import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

const ICON_CLASSNAME: string = " hover:text-primary transition-duration-400";
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NgFor, NgClass, SectionTitleComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  email: string = "jorgejgdrj41@gmail.com";
  itchioUrl: string = "https://drande.itch.io/";

  contactItems: MenuItem[] = [
    {
      icon: PrimeIcons.WHATSAPP.concat(ICON_CLASSNAME),
      url: "https://wa.me/573118683827"
    },
    {
      icon: PrimeIcons.LINKEDIN.concat(ICON_CLASSNAME),
      url: "https://www.linkedin.com/in/jorge-fernandez-fullstack-unity-developer/"
    },
    {
      icon: PrimeIcons.GITHUB.concat(ICON_CLASSNAME),
      url: "https://github.com/Drande"
    },
  ];
}
