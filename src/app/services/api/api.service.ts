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
            this.http.get('/jobReq/nListForAdd?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_jobSharedList(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/jobReq/nListForAddShared?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_jobNote(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/personNote/nList?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_document(personId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/personDocument/nList?personId=' + personId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_saveJobNote(event: any): Promise<any> {

        let params = new HttpParams().set('note', event.note.note).set('isShared', event.note.isShared).set('isSharedEveryone', event.note.isSharedEveryone);
        if (event.note.id != null) {
            params = params.append('id', event.note.id);
        } else {
            params = params.append('personId', event.personID);
        }

        return new Promise((resolve, reject) => {
            this.http.get(event.note.id != null ? '/personNote/wUpdate' : '/personNote/wCreate', params).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_deleteNOte(id: any) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/personNote/wDelete?id=' + id).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_addJob(event: any) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/jobReq/nCreate?title=' + event.newName).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    person_setJobReq(data: any) : Promise<any> {

        const url = data.check ? '/personJobReq/wCreate' : '/personJobReq/wDelete';
        const params = new HttpParams().set('personId', data.personID).set('jobReqId', data.jobReqID);
        return new Promise((resolve, reject) => {
            this.http.get(url, params).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    account_nListColleagues() : Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get('/account/nListColleagues').then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteJobReq(data: any) : Promise<any> {

        const url = data.forSave ? '/jobReq/wUpdate' : '/jobReq/wDelete';
        var params = new HttpParams().set('id', data.itemData.id);
        if (data.forSave) {
            params = params.append('title', data.itemData.title);
            params = params.append('isShared', data.itemData.isShared);
            params = params.append('accountOwnerId', data.itemData.accountOwnerId);
        }

        return new Promise((resolve, reject) => {
            this.http.get(url, params).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

}
