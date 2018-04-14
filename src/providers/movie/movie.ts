import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {
  private baseApiUrl = "http://ip.jsontest.com/";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  GetMovies(){
    return this.http.get(this.baseApiUrl);
  }
}
