import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleThemeComponent {

  get isLightTheme(): boolean {
    return this._themeService.isLightTheme;
  }

  constructor(
    private readonly _themeService: ThemeService
  ) {}

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
