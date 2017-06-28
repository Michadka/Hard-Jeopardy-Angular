import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class JeopardyService {

  private baseUrl: string = 'http://jservice.io/api/random';
  private numQuest: string = '?count=3'
  
  constructor(private http: Http, private Md5: Md5) {}

  getRecords(): Observable <any>{
    let apiUrl = `${this.baseUrl}${this.numQuest}`
    return this.http.get(apiUrl)
      .map(this.extractData) //what to do on success
      .catch(this.handleError); //what to do on error
  }

    private extractData (res: Response){
    let results = res.json();
    return results || [];
  }

  private handleError(error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
          if(error.status === 0){
              errMsg = "Error connecting to API"
          }else{
              const errorJSON = error.json();
              errMsg = `${errorJSON.code} - ${errorJSON.message}`;
          } 
      }
      return Observable.throw(errMsg);
  }
}






