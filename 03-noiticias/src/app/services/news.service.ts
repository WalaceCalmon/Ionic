import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NewsResponse } from './../interfaces';
import { Article } from './../interfaces';

const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
    ) { }

    getTopHeadLines():Observable<Article[]>{
      return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=tesla&from=2022-05-20&sortBy=publishedAt`,{
        params: {
          apiKey: apiKey
        }
      }).pipe(
        map ( ({ articles }) => articles)
      );
    }
}
