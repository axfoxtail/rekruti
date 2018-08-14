import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    
    private baseUrl = 'https://cors-anywhere.herokuapp.com/' + environment.endpoint;
    private headers: any;

    constructor(public http: HttpClient) {
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Accept', 'application/json; version=2');
    }
    
    get(query:string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + query, { headers: this.headers })
                .pipe(map(response => {
                    resolve(response);
            }))
            .subscribe(data => resolve(data), error => reject(error));
        })
    }
    post(query:string, body:any, options?:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + query, body,{headers:this.headers})
                .pipe(map(response=> response)).subscribe(data => resolve(data), error => reject(error));
        });
    }
    
    put(query:string, body:any, options?:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put(this.baseUrl + query, body,{headers:this.headers})
                .pipe(map(response=> response)).subscribe(data => resolve(data), error => reject(error));
        });
    }
}
