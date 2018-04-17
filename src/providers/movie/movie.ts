import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {
  private baseApiUrl = "https://api.themoviedb.org/3";
  private key = "d31327da24c2d1e54a2db9aa36e7bb74"


  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  //ALTERAMOS O METODO DE PEGAR FILMES PARA RECEBER A PAGINA QUE ELE DEVE PEGAR
  GetMovies(page = 1){
    return this.http.get(this.baseApiUrl + '/movie/popular?page=${page}&api_key=' + this.key);
  }

  //CRIAMOS UM NOVOMETODO NO PROVIDER PRA ACESSAR OS DETALHES DO FILME
  GetMoviesDetails(filmeId){
    return this.http.get(this.baseApiUrl + "/movie/" + filmeId + "?api_key=" + this.key)
  }
}
