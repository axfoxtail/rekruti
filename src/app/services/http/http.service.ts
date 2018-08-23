import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    
    private baseUrl = environment.endpoint;
    private httpOptions:any;

    constructor(public http: HttpClient) {
        this.httpOptions = {
            headers: {
              'Content-Type':  'text/plain',
            },
            withCredentials: true
        };
    }
    
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
