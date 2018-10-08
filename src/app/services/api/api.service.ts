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

    saveOrDeleteDocument(data: any) : Promise<any> {

        var url = '/';
        var params = new HttpParams().set('id', data.itemData.itemData.id);
        var formData = new FormData();
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personDocument/wUpload';

                formData.append('file', data.file);
                formData.append('isShared',data.itemData.itemData.isShared);
                formData.append('isSharedEveryone',data.itemData.itemData.isSharedEveryone);
                formData.append('personId', data.itemData.itemData.accountId);

            } else {
                url += 'personDocument/wUpdate';

                params = params.append('name', data.itemData.itemData.name);
                params = params.append('isShared', data.itemData.itemData.isShared);
                params = params.append('isSharedEveryone', data.itemData.itemData.isSharedEveryone);
                params = params.append('accountOwnerId', data.itemData.itemData.accountId);

            }

        } else {
            url += 'personDocument/wDelete';
        }

        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.post(url, params).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url, params).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // ===== People Contact Email Service

    saveOrDeleteEmail(data: any) : Promise<any> {
    console.log('email:', data);

        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personEmail/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&email=' + data.itemData.itemData.email +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            } else {
                url += 'personEmail/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&email=' + data.itemData.itemData.email +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            }

        } else {
            url += 'personEmail/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    phoneType_Qbe() : Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get('/phoneType/Qbe?').then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    // ----------------------- 

    saveOrDeletePhone(data: any) : Promise<any> {
        console.log('phone:', data);
        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personPhone/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&phone=' + data.itemData.itemData.phone +
                        '&phoneTypeId=' + data.itemData.itemData.phoneTypeId +
                        '&extension=' + data.itemData.itemData.extension +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            } else {
                url += 'personPhone/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&phone=' + data.itemData.itemData.phone +
                        '&phoneTypeId=' + data.itemData.itemData.phoneTypeId +
                        '&extension=' + data.itemData.itemData.extension +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            }

        } else {
            url += 'personPhone/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteWebLink(data: any) : Promise<any> {
    console.log('weblink',data);

        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personUrl/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&url=' + data.itemData.itemData.url + 
                        '&urlTypeId=' + data.itemData.itemData.urlTypeId;

            } else {
                url += 'personUrl/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&url=' + data.itemData.itemData.url +
                        '&urlTypeId=' + data.itemData.itemData.urlTypeId;

            }

        } else {
            url += 'personUrl/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteAddress(data: any) : Promise<any> {
    console.log(data);

        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personAddress/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&address1= ' + data.itemData.itemData.address1 +
                        '&address2=' + data.itemData.itemData.address2 +
                        '&geoCityId=' + data.itemData.itemData.geoCityId +
                        '&zipCode=' + data.itemData.itemData.zipCode +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            } else {
                url += 'personAddress/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&address1=' + data.itemData.itemData.address1 +
                        '&address2=' + data.itemData.itemData.address2 +
                        '&geoCityId=' + data.itemData.itemData.geoCityId +
                        '&zipCode=' + data.itemData.itemData.zipCode +
                        '&isBusiness=' + data.itemData.itemData.isBusiness;

            }

        } else {
            url += 'personAddress/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteExperience(data: any) : Promise<any> {
    console.log('experience:', data);

        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personExperience/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&title=' + data.itemData.itemData.jobTitle +
                        '&company=' + data.itemData.itemData.company +
                        '&geoId=' + data.itemData.itemData.geoId +
                        '&startMonth=' + data.itemData.itemData.startMonth +
                        '&startYear=' + data.itemData.itemData.startYear +
                        '&endMonth=' + data.itemData.itemData.endMonth +
                        '&endYear=' + data.itemData.itemData.endYear +
                        '&isCurrent=' + data.itemData.itemData.isCurrent +
                        '&summary=' + data.itemData.itemData.summary;

            } else {
                url += 'personExperience/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&title=' + data.itemData.itemData.title +
                        '&company=' + data.itemData.itemData.company +
                        '&geoId=' + data.itemData.itemData.geoId +
                        '&startMonth=' + data.itemData.itemData.startMonth +
                        '&startYear=' + data.itemData.itemData.startYear +
                        '&endMonth=' + data.itemData.itemData.endMonth +
                        '&endYear=' + data.itemData.itemData.endYear +
                        '&isCurrent=' + data.itemData.itemData.isCurrent +
                        '&summary=' + data.itemData.itemData.summary;

            }

        } else {
            url += 'personExperience/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteEducation(data: any) : Promise<any> {
    console.log(data);

        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personEducation/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&title=' + data.itemData.itemData.title +
                        '&company=' + data.itemData.itemData.company +
                        '&geoId=' + data.itemData.itemData.geoId +
                        '&endYear=' + data.itemData.itemData.endYear +
                        '&summary=' + data.itemData.itemData.summary;

            } else {
                url += 'personEducation/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&title=' + data.itemData.itemData.title +
                        '&company=' + data.itemData.itemData.company +
                        '&geoId=' + data.itemData.itemData.geoId +
                        "&endYear=" + data.itemData.itemData.endYear +
                        '&summary=' + data.itemData.itemData.summary;

            }

        } else {
            url += 'personEducation/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    saveOrDeleteLicense(data: any) : Promise<any> {
    console.log('license:',data);
    
        var url = '/';
        if (data.forSave) {
                
            if (data.forAdd) {
                url += 'personLicense/wCreate' +
                        '?personId=' + data.itemData.personID +
                        '&title=' + data.itemData.itemData.title +
                        '&number=' + data.itemData.itemData.number +
                        '&startingDate=' + data.itemData.itemData.startingDate +
                        //'&startingDate=' +
                        '&expirationDate=' + data.itemData.itemData.expirationDate +
                        //'&expirationDate=' +
                        '&state=' + data.itemData.itemData.state;

            } else {
                url += 'personLicense/wUpdate' +
                        '?id=' + data.itemData.itemData.id +
                        '&title=' + data.itemData.itemData.title +
                        '&number=' + data.itemData.itemData.number +
                        '&startingDate=' + data.itemData.itemData.startingDate +
                        //'&startingDate=' +
                        '&expirationDate=' + data.itemData.itemData.expirationDate +
                        //'&expirationDate=' +
                        '&state=' + data.itemData.itemData.state;

            }

        } else {
            url += 'personLicense/wDelete' +
                    '?id=' + data.itemData.itemData.id;
        }

        console.log('url:',url);
        if (data.forSave && data.forAdd) {
            return new Promise((resolve, reject) => {
                this.http.get(url).then(data => {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }

        return new Promise((resolve, reject) => {
            this.http.get(url).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    initCityLists(data: any) : Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get('/geoCity/wSearchCombo?keyword=' + data.query).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    loadPeopleSource(data: any) : Promise<any> {
        console.log('xx:', data);

        return new Promise((resolve, reject) => {
            this.http.get('/personSource/wRead?id=' + data.objId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }

    deleteSource(data: any) : Promise<any> {
        console.log('aadel', data);
        return new Promise((resolve, reject) => {
            this.http.get('/personSource/wDelete?id=' + data.objId).then(data => {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }
// ============================================ Admin Sourcing API ============================================== //
    searchForSourcing(queryJson: any) : Promise<any> {
      var route = window.location.href.split("admin/sourcing/")[1];
      if(route) {
        switch(route) {
         case 'database-usa' : route = 'databaseUsa'; break;
         case 'full-contact-person' : route = 'fullContactPerson'; break;
         case 'full-contact-company' : route = 'fullContactCompany'; break;
         case 'glassdoor-company' : route = 'glassdoorCompany'; break;
         case 'glassdoor-job' : route = 'glassdoorJob'; break;
         case 'google-maps' : route = 'googleMap'; break;
         case 'npi-officer' : route = 'npiOfficer'; break;
         case 'medicare-ambulatory' : route = 'medicareAmbulatory'; break;
         case 'medicare-dialysis' : route = 'medicareDialysis'; break;
         case 'medicare-home-health' : route = 'medicareHomeHealth'; break;
         case 'medicare-hospital' : route = 'medicareHospital'; break;
         case 'medicare-physician' : route = 'medicarePhysician'; break;
         case 'medicare-nursing-home' : route = 'medicareNursingHome'; break;
         case 'medicare-supplier' : route = 'medicareSupplier'; break;
         case 'sovren-resume' : route = 'sovrenResume'; break;
         case 'us-companies-list' : route = 'databaseCorp'; break;
         default : route = route; break;
        }
        
        var page = queryJson.page === 0 ? queryJson.page : (queryJson.page - 1) * 20;
        var sort = queryJson.sort == '' ? 'relevancy' : queryJson.sort;
        var url = '/' + route + '/wSearch?keyword=' + queryJson.keyword +
                  '&from=' + page + queryJson.urlFacets + 
                  '&sort=' + sort;

        return new Promise((resolve, reject) => {
          this.http.get(url).then(data => {
            resolve(data);
          }, function (error) {
            reject(error);
          });
        });
      }
    }

}
