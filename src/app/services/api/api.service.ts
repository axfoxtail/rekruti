import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class RekrutiApiService {

    constructor(private http:HttpService) { }
    
    //login start
    login(data:any):Promise<any> {
        return new Promise((resolve, reject) => {
            let params = new HttpParams().set('email', data.email).set('password', data.password);
            this.http.get("/account/wLogin", params).then(data => {
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
    getPeopleList(body:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post("/person/wSearch", JSON.stringify(body)).then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //people list
    
    //employers list
    getEmployersList(keyword_:any, from_:any, urlFacets_:any, sort_:any):Promise<any> {
        return new Promise((resolve, reject) => {
            let params = new HttpParams().set('keyword', keyword_).set('from', from_ + urlFacets_).set('sort', sort_);
            this.http.get("/geoPlace/wSearch", params).then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    };
    //employers list
    
    getConceptComboAPI(url:any):Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function(error) {
                reject(error);
            });
        });
    }
}
