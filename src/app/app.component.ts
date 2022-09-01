import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'jarvis-web-client';

  backendAnswer$: Observable<string>;

  constructor(
    private readonly _http: HttpClient
  ) {
    this.backendAnswer$ = this._http.get<{ answer: string }>(environment.backendUrl).pipe(pluck('answer'));
  }
}
