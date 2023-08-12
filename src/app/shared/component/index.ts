import { Type } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';

export const SHARED_COMPONENTS: Type<any>[] = [
  PageNotFoundComponent,
  ToggleThemeComponent
];
