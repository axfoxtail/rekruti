import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http:HttpService) { }
    
    //login start
    login(data:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get("/account/wLogin?email=" + data.email + "&password=" + data.password).then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //login end
    
    //logout start
    logout():Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get("/account/wLogout?").then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //logout end
    
    //people list
//    getPeopleList():Promise<any> {
//        return new Promise((resolve, reject) => {
//            var body = {
//                sort: "lastUpdate", from: 0
//            }
//            this.http.post("/person/wSearch", body).then(data => {
//                resolve(data);
//            }, function(error) {
//                reject(error);
//            });
//        });
//    };
    getPeopleList():Promise<any> {
        return new Promise((resolve, reject) => {
            var body = {
                sort: "lastUpdate", from: 0
            }
            this.http.getTest().then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //people list
}
