import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'my-app',
  templateUrl:  './app.component.html',
})
export class AppComponent  { 
   link: number = 0;
  load: number =  0;
  res:string;

   constructor(private appService: AppService) { }   
   setLink(a:number){
     this.link = a;
   }

   submitLink(link:string) {
     this.appService.submitLink(link).subscribe(
       res => {this.load =  1;
        this.res = res;
        this.load = 0;
       }
     )
   }

   submitArticle(article:string){
     this.appService.submitArticle(article).subscribe(
      res => {this.load =  1;
       this.res = res;
       this.load = 0;
      }
    )
   }
}
