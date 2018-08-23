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
            this.http.get("/geoPlace/wSearch?keyword=" + keyword_ + "&from=" + from_ + urlFacets_ + "&sort=" + sort_).then(data => {
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
