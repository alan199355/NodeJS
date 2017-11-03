import { HttpModule, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AccountService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(
    private http: Http
  ) { }
}
