import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class RekrutiApiService {

    constructor(private http: HttpService) {
    }

    // login start
    account_wLogin(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const params = new HttpParams().set('email', data.email).set('password', data.password);
            this.http.get('/account/wLogin', params).then(_data => {
                resolve(_data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // login end

    // logout start
    account_wLogout(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/account/wLogout?').then(_data => {
                resolve(_data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // logout end

    // people list
    person_wSearch(body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post('/person/wSearch', JSON.stringify(body)).then(_data => {
                resolve(_data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_wRead(id: any, isRefresh: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {

            let params = new HttpParams().set('id', id);
            if (isRefresh) {
                params = params.append('isRefresh', 'true');
            }
            this.http.get('/person/wRead', params).then(_data => {
                resolve(_data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // people list

    // employers list
    geoPlace_wSearch(keyword_: any, from_: any, urlFacets_: any, sort_: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let params = new HttpParams().set('keyword', keyword_).set('from', from_).set('sort', sort_);
            _.forEach(urlFacets_, (value, key) => {
                params = params.append(key, value);
            });

            this.http.get('/geoPlace/wSearch', params).then(_data => {
                resolve(_data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // employers list

    geoCity_wSearchCombo(param: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/geoCity/wSearchCombo?keyword=' + param).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    geoState_wSearchCombo(param: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/geoState/wSearchCombo?keyword=' + param).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    geoCountry_wSearchCombo(param: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/geoCountry/wSearchCombo?keyword=' + param).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    concept_wSearchComboType(param: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/concept/wSearchComboType?search=' + param).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_jobList(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('jobReq/nListForAdd?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_jobSharedList(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('jobReq/nListForAddShared?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_jobNote(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('personNote/nList?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

}
