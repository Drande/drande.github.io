import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NgClass } from '@angular/common';
import { ThemeTogglerComponent } from '../../components/theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [RouterModule, MenubarModule, NgClass, ThemeTogglerComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {
  items: MenuItem[] = [
    {
      label: "Home",
      icon: PrimeIcons.HOME,
      routerLink: "/",
      fragment: "home",
    },
    {
      label: "Proyects",
      icon: PrimeIcons.FILE,
      routerLink: "/",
      fragment: "proyects",
    },
    {
      label: "About me",
      icon: PrimeIcons.USER,
      routerLink: "/",
      fragment: "about",
    },
    {
      label: "Resume",
      icon: PrimeIcons.FILE,
      routerLink: "/resume",
    },
    {
      label: "Contact",
      routerLink: "/",
      icon: PrimeIcons.PHONE,
      fragment: "contact",
    }
  ];

}
