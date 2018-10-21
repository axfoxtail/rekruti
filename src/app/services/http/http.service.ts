import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private baseUrl = environment.endpoint;
    private httpHeaders: any;

    constructor(public http: HttpClient) {
        this.httpHeaders = {
            'Content-Type': 'text/plain'
        };
    }

    get(query: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + query, {headers: this.httpHeaders, params: params, withCredentials: true})
                .pipe(map(response => {
                    resolve(response);
                }))
                .subscribe(data => resolve(data), error => reject(error));
        });
    }

    post(query: string, body: any, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + query, body, {headers: this.httpHeaders, withCredentials: true})
                .pipe(map(response => response)).subscribe(data => resolve(data), error => reject(error));
        });
    }

    post_form(query: string, body: any, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + query, body, {headers: {'Content-Type': 'multipart/form-data'}, withCredentials: true})
                .pipe(map(response => response)).subscribe(data => resolve(data), error => reject(error));
        });
    }    

}
