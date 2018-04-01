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
    updateUrl = "http://localhost:8000/api/update/"
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

    update(link:string, fn: string, bs: number){
        let resp = {
            "link": link,
            "fake_result": fn,
            "bias_result": bs
        }
        console.log(JSON.stringify(resp));
        this.http.post(this.updateUrl, JSON.stringify(resp)).subscribe(res =>  console.log("posted"));
    }
}
