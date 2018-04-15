import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {
  private baseApiUrl = "https://api.themoviedb.org/3";
  private key = "d31327da24c2d1e54a2db9aa36e7bb74"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  GetMovies(){
    return this.http.get(this.baseApiUrl + "/movie/popular?api_key=" + this.key);
  }
}
