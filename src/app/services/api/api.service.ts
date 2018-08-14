import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http:HttpService) { }
    
    //login
    login(data:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get("/account/wLogin?email=" + data.email + "&password=" + data.password).then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //login
}
