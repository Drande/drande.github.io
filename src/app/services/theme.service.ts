import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  isDarkTheme(): boolean {
    return this.currentTheme === 'dark';
  }
}
