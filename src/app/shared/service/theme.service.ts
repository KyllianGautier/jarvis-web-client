import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from '../shared.module';
import { AppModule } from '../../app.module';


enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private get _currentTheme(): Theme {
    return this._document.body.classList.contains(Theme.Dark) ? Theme.Dark : Theme.Light;
  }

  get isLightTheme(): boolean {
    return this._currentTheme === Theme.Light;
  }

  get isDarkTheme(): boolean {
    return this._currentTheme === Theme.Dark;
  }

  get isBrowserPreferredTheme(): boolean {
    return this._currentTheme === this._getPreferredTheme();
  }

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document
  ) {}

  applyDarkTheme(): void {
    this._applyTheme(Theme.Dark);
  }

  applyLightTheme(): void {
    this._applyTheme(Theme.Light);
  }

  applyBrowserPreferredTheme(): void {
    this._applyTheme(this._getPreferredTheme());
  }

  toggleTheme(): void {
    this._applyTheme(this.isDarkTheme ? Theme.Light : Theme.Dark);
  }

  private _applyTheme(theme: Theme): void {
    console.log('Applying theme: ', theme);
    this._document.body.classList.remove(Theme.Dark, Theme.Light);
    this._document.body.classList.add(theme);
  }

  private _getPreferredTheme(): Theme {
    console.log('Browser preferred theme: ', window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light);
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.Dark
      : Theme.Light;
  }
}
