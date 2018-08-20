import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    
//    private baseUrl = environment.endpoint;
    private baseUrl = 'https://cors-anywhere.herokuapp.com/' + environment.endpoint;
    httpOptions:any;

    constructor(public http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
//              'Content-Type':  'undefined',
              'Access-Control-Allow-Headers': '*',
              'Accept': 'application/json; version=2'
            }),
//            withCredentials: true
        };
    }
    
    
    //it's for test data
    getTest(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('https://api.myjson.com/bins/oaoj0')
                .pipe(map(response => {
                    resolve(response);
            }))
            .subscribe(data => resolve(data), error => reject(error));
        })
    }
    getTest2(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('https://api.myjson.com/bins/qo82w')
                .pipe(map(response => {
                    resolve(response);
            }))
            .subscribe(data => resolve(data), error => reject(error));
        })
    }
    //it's for test data
    
    get(query:string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + query, this.httpOptions)
                .pipe(map(response => {
                    resolve(response);
            }))
            .subscribe(data => resolve(data), error => reject(error));
        })
    }
    post(query:string, body:any, options?:any):Promise<any> {
        console.log(this.baseUrl + query);
        console.log(body);
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + query, body,this.httpOptions)
                .pipe(map(response=> response)).subscribe(data => resolve(data), error => reject(error));
        });
    }
    
    put(query:string, body:any, options?:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put(this.baseUrl + query, body,this.httpOptions)
                .pipe(map(response=> response)).subscribe(data => resolve(data), error => reject(error));
        });
    }
}
