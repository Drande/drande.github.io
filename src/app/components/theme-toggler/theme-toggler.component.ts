import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [FormsModule, InputSwitchModule],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
  #document = inject(DOCUMENT);
  isDarkMode: boolean;
  lightTag: HTMLLinkElement;
  darkTag: HTMLLinkElement;

  constructor() {
    this.darkTag = this.#document.getElementById('app-theme-dark') as HTMLLinkElement;
    this.lightTag = this.#document.getElementById('app-theme-light') as HTMLLinkElement;
    this.isDarkMode = !this.darkTag.disabled;
  }

  toggleTheme() {
    if (this.darkTag.disabled) {
      this.darkTag.disabled = false;
      this.lightTag.disabled = true;
      this.isDarkMode = true;
    } else {
      this.lightTag.disabled = false;
      this.darkTag.disabled = true;
      this.isDarkMode = false;
    }
  }
}
