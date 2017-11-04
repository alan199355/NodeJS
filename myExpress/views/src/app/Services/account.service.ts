import { HttpModule, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AccountService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://cnodejs.org/api/v1/topics';
  constructor(
    private http: Http
  ) { }
  getData(): Promise<{}> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json().data as {})
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
