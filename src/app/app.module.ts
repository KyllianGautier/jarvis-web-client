import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './shared/service/theme.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private readonly _themeService: ThemeService,
    private readonly _httpClient: HttpClient
  ) {
    this._themeService.applyBrowserPreferredTheme();

    this._httpClient
      .get(environment.jarvisCoreServiceApiUrl)
      .subscribe(console.log);
  }
}
