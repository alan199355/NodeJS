import { HttpModule, Headers, Http } from '@angular/http';
export class AccountService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(
    private http: Http
  ) { }
}
