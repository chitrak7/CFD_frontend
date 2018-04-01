import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

    constructor(
        private http: HttpClient,
    ) { }
    
    linkUrl = "http://localhost:8000/api/link"
    articleUrl = "http://localhost:8000/api/article"
    submitLink(a:string): Observable<string>{
	let url = this.linkUrl + "?url=" + a;      
        let params: HttpParams = new HttpParams();
        params.set('url', a)
        return this.http.get<string>(url)
    }

    submitArticle(a:string): Observable <string>{
        let article = this.articleUrl + "?article=" + a; 
        let params: HttpParams = new HttpParams();
        params.set('article', a)
        return this.http.get<string>(this.articleUrl, {
            params:params
        })
    }
}
