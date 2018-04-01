import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'my-app',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  link: number = 1;
  load: number =  0;
  res: number = 0 
  key_phrases:string;
  bias_res:string;
  fake_res: string;
  sentiment: string;

   constructor(private appService: AppService) { }   
   setLink(a:number){
     this.link = a;
   }

   submitLink(link:string) {
    this.load =  1;
    console.log("submitted")
     this.appService.submitLink(link).subscribe(
       res => {
        console.log("sucess")
        let resData = JSON.parse(JSON.stringify(res));
        this.fake_res = resData.fake_result;
        this.bias_res = this.bias_handle(resData.bias_result)
        this.sentiment = this.sentiment_handle(resData.sentiment);
        this.key_phrases = resData.key_phrases;
        this.load = 0;
        this.res=1
       }
     )
   }

   submitArticle(article:string){
    this.load =  1;
     this.appService.submitArticle(article).subscribe(
      res => {
        let resData = JSON.parse(JSON.stringify(res));
       this.fake_res = resData.fake_result;
       this.bias_res = this.bias_handle(resData.bias_result);
       this.sentiment = resData.sentimentl;
       this.key_phrases = resData.key_phrases;
       this.load = 0;
       this.res=1
      }
    )
   }

   update(link:string) {
     let bias = this.getBias(this.bias_res);
     console.log("sfasf")
     this.appService.update(link, this.fake_res, bias);
   }

   bias_handle(a:string){
     if (a=="1")
        return "right";
    else if (a=="-1")
     return "left";
     else 
      return "neutral";
   }

   sentiment_handle(a:string): string{
     let b = parseFloat(a)
     if(b < 0.1 || b >0.9){
       return "sensationalist"
     } 
     return "ideal"
   }

   getBias(a:string){
     if (a=='left')
        return -1;
    else if (a == 'right')
        return 1;
    else  
        return 0;
   }
}
