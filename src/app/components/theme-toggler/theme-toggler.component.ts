import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [FormsModule, InputSwitchModule],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
  private stylesheetLink?: HTMLLinkElement;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();
    }
  }

  loadTheme() {
    const theme = this.themeService.getTheme();
    const themeFile = theme === 'dark' ? 'theme-dark.css' : 'theme-light.css';
    this.addStylesheet(themeFile);
  }

  addStylesheet(href: string) {
    this.stylesheetLink = this.renderer.createElement('link');
    this.stylesheetLink!.rel = 'stylesheet';
    this.stylesheetLink!.href = href;
    this.renderer.appendChild(document.head, this.stylesheetLink);
  }

  removeStylesheet() {
    if (this.stylesheetLink) {
      this.renderer.removeChild(document.head, this.stylesheetLink);
    }
  }

  toggleTheme() {
    this.removeStylesheet();
    this.themeService.toggleTheme();
    this.loadTheme();
  }

  get isDarkTheme () {
    return this.themeService.isDarkTheme();
  }
}
