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

    const params = new HttpParams().set('personId', data.personID).set('jobReqId', data.jobReqID);
    if(data.check) {
      var url = '/personJobReq/wAdd?personId=' + data.personID + '&jobReqId=' + data.jobReqID;
    } else {
      var url = '/personJobReq/wDelete?personId=' + data.personID + '&jobReqId=' + data.jobReqID;
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
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
    var fd = new FormData();
    if (data.forSave) {
        
      if (data.forAdd) {
        url += 'personDocument/wUpload';

        fd.append('personId', data.itemData.itemData.accountId);
        fd.append('isShared', data.itemData.itemData.isShared);
        fd.append('isSharedEveryone', data.itemData.itemData.isSharedEveryone);
        fd.append('file', data.file[0]);

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
        this.http.post_form(url, fd).then(data => {
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

    return new Promise((resolve, reject) => {
      this.http.get('/personSource/wRead?id=' + data.objId).then(data => {
        resolve(data);
      }, function (error) {
        reject(error);
      });
    });
  }

  deleteSource(data: any) : Promise<any> {
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
     case 'us-companies-list' : route = 'usCompanies'; break;
     case 'us-companies-list2' : route = 'usCompanies2'; break;
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
// ============================================== Admin Settings API ============================================= //
  searchForSettings(queryJson: any) : Promise<any> {
    var route = window.location.href.split("admin/settings/")[1];
    var sort: any = 'relevancy';
    if(queryJson.sort){
      var sort = queryJson.sort;
    }
    var searchURL = 'wSearch?keyword=';
    if(route) {
      switch(route) {
        case 'geo' : route = 'geoNew'; break;
        case 'geo-lookup' : route = 'geoLookup'; break;
        case 'concept-lookup' : route = 'conceptLookup'; break;
        case 'help-bubble' : route = 'helpBubble'; searchURL = 'nSearch?search='; break;
        default : route = route; break;
      }

      var page = queryJson.page === 0 ? queryJson.page : (queryJson.page - 1) * 20;
      var url = '/' + route + '/' + searchURL + queryJson.keyword +
            '&from=' + page + queryJson.urlFacets +
            '&sort=' + sort;
      return new Promise((resolve, reject) => {
        this.http.get(url).then(data => {
          resolve(data);
        }, function(error){
          reject(error);
        });
      });
    }
  }
  // ---------- account api ------- //
  get_list_accountTypeName() : Promise<any> {
    var url = '/accountType/Qbe?';
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  get_list_organizationId() : Promise<any> {
    var url = '/client/nList?';
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  get_list_monthlyAllowance() : Promise<any> {
    var url = '/accountAllowance/Qbe?'    ;
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  get_list_accountProfileId() : Promise<any> {
    var url = '/accountProfile/nList?';
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  } 

  saveAccount(data: any) : Promise<any> {
    if(data.forAdd){
      var url = '/account/wCreate'+
                '?email=' + encodeURIComponent(data.itemData.email) +
                '&accountAllowanceId=' + data.itemData.accountAllowanceId +
                '&password=' + encodeURIComponent(data.itemData.password_new) +
                '&accountTypeId=' + data.itemData.accountTypeId +
                '&name=' + encodeURIComponent(data.itemData.name) +
                '&cellPhone=' + data.itemData.cellPhone +
                '&organizationId=' + data.itemData.organizationId +
                '&accountProfileId=' + data.itemData.accountProfileId;
    } else {
      var isDeactivated = data.itemData.isDeactivated == true ? "YES" : "NO";
      var url = '/account/wUpdate'+
                '?id=' + data.itemData.id +
                '&email=' + encodeURIComponent(data.itemData.email) +
                '&name=' + encodeURIComponent(data.itemData.name) +
                '&cellPhone=' + data.itemData.cellPhone +
                '&accountTypeId=' + data.itemData.accountTypeId +
                '&organizationId=' + data.itemData.organizationId +
                '&accountProfileId=' + data.itemData.accountProfileId +
                '&accountAllowanceId=' + data.itemData.accountAllowanceId +
                '&isDeactivated=' + isDeactivated;
    }

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    })
  }
  // --------- ./account api ---------- //

  // ----------- client api ----------- //
  saveClient(data: any) : Promise<any> {
    if(data.forAdd){
      var url = '/client/nCreate?name=' + data.itemData.name +
                '&address1=' + data.itemData.address1 +
                 '&address2=' + data.itemData.address2 +
                 '&zipCode=' + data.itemData.zipCode +
                 '&geoId=' + data.itemData.geoId;
    } else {
      var url = '/client/nUpdate?id=' + data.itemData.id +
                '&name=' + encodeURIComponent(data.itemData.name) +
                '&address1=' + encodeURIComponent(data.itemData.address1) +
                '&address2=' + encodeURIComponent(data.itemData.address2) +
                '&zipCode=' + encodeURIComponent(data.itemData.zipCode) +
                '&geoId=' + data.itemData.geoId;
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    })
  }

  deleteClient(data: any) : Promise<any> {
    var url = '/client/nDelete?id=' + data.id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ---------- ./client api ---------- //

  // ----------- concept api ---------- //
  get_listConceptType() : Promise<any> {
    var url = '/conceptType/nList?';
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveConcept(data: any) : Promise<any> {
    if(data.forAdd){
      var url = '/concept/nAdd?name=' + encodeURIComponent(data.itemData.name) +
                '&conceptTypeId=' + data.itemData.conceptTypeId +
                '&description=' + encodeURIComponent(data.itemData.definition) +
                '&isHiddenFacet=' + data.itemData.isHiddenFacet;
    } else {
      var url = '/concept/nUpdate?id=' + data.itemData.id +
                '&conceptTypeId=' + data.itemData.conceptTypeId +
                '&name=' + encodeURIComponent(data.itemData.name) +
                '&description=' + encodeURIComponent(data.itemData.description) +
                '&isHiddenFacet=' + data.itemData.isHiddenFacet;
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    })
  }

  deleteConcept(data: any) : Promise<any> {
    var url = '/concept/nDelete?id=' + data.id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ----------- ./concept api --------- //

  // ----------- concept detail api ----------- //
  getConceptDetailData(conceptId: number) : Promise<any> {
    var url = '/concept/wRead?id=' + conceptId;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveLinkForConcept(data: any) : Promise<any> {
    var url = '/conceptUrl/nAdd?url=' + encodeURIComponent(data.itemData.url) +
              '&conceptId=' + data.conceptId;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteLinkForConcept(data: any) : Promise<any> {
    var url = '/conceptUrl/nDelete?id=' + data.id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });

  }

  get_listScope() : Promise<any> {
    var url = '/conceptSqScope/nList';

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveRuleForConcept(data: any) : Promise<any> {
    if(data.forAdd){
      var url = '/conceptSynonym/nAdd?conceptId=' + data.id +
                '&name=' + encodeURIComponent(data.name) +
                '&conceptSqScopeId=' + data.roles.toString() +
                '&isAntonym=' + data.isAntonym;
    } else {
      var url = '/conceptSynonym/nUpdate?id=' + data.id +
                '&name=' + data.name +
                '&conceptSqScopeId=' + data.roles.toString() +
                '&isAntonym=' + data.isAntonym;
    }

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteRuleForConcept(data: any) : Promise<any> {
    var url = '/conceptSynonym/nDelete?id=' + data.id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
          resolve(data);
        }, function(error){
          reject(error);
        });
    });
  }

  searchConceptInference(keyword: any) : Promise<any> {
    var url = '/concept/wSearch?keyword=' + keyword;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveInferenceForConcept(data: any) : Promise<any> {
    var url = '/conceptRelation/nAdd?conceptId=' + data.conceptId + '&conceptIdB=' + data.inferenceId;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteInferenceForConcept(id: any) : Promise<any> {
    var url = '/conceptRelation/nDelete?id=' + id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteConceptJoint(id: any) : Promise<any> {
    var url = '/conceptJoint/nDelete?id=' + id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
       resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ---------- ./concept detail api ---------- //

  // ------------ geo-lookup, geo detail api ------------ //
  get_settingsGeoLookupJson(data_id: any) : Promise<any> {
    var url = '/googleMapToSearch/wRead?geoLookupId=' + data_id;
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveLinkForGeo(data: any) : Promise<any> {
    var url = '/geoUrl/nAdd?url=' + encodeURIComponent(data.itemData.url) +
              '&geoId=' + data.geoId;
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  readGeoDetail(id: any) : Promise<any> {
    var url = '/geoNew/wRead?id=' + id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  get_linkToGeo(data: any) : Promise<any> {
    var page = data.page === 0 ? data.page : (data.page - 1) * 20;
    var url = '/geoNew/wSearch?keyword=' + data.keyword + '&from=' + page + data.urlFacets;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveLinkToGeo(data: any) : Promise<any> {
    var url = '/geoLookup/nUpdate?id=' + data.geoLookupId +
              '&geoId=' + data.geoId +
              '&isAmbiguous=' + data.isAmbiguous +
              '&isGarbage=' + data.isGarbage;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ----------- ./geo-lookup api ----------- //

  // ------------ concept-lookup api ----------- //
  deleteConceptLookup(data_id: any) : Promise<any> {
    var url = '/conceptJoint/nDelete?id=' + data_id;
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data=>{
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  get_AttachConcept(data: any) : Promise<any> {
    var page = data.page === 0 ? data.page : (data.page - 1) * 20;
    var url = '/concept/wSearch?keyword=' + data.keyword + '&from=' + page + data.urlFacets;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveAttachConcept(data: any) : Promise<any> {
    var url = '/conceptJoint/nCreate?conceptId=' + data.conceptId +
              '&conceptLookupId=' + data.conceptLookupId +
              '&isGarbage=' + data.isGarbage;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ----------- ./concept-lookup api ---------- //

  // ------------ help-bubble api ------------- //
  saveHelpBubble(data: any) : Promise<any> {
    if(data.forAdd) {
      var url = '/helpBubble/nCreate' +
                '?context=' + encodeURIComponent(data.itemData.context) +
                '&title=' + encodeURIComponent(data.itemData.title) +
                '&description=' + encodeURIComponent(data.itemData.description);
    } else {
      var url = '/helpBubble/nUpdate' +
                '?id=' + data.itemData.id +
                '&context=' + encodeURIComponent(data.itemData.context) +
                '&title=' + encodeURIComponent(data.itemData.title) +
                '&description=' + encodeURIComponent(data.itemData.description);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteHelpBubble(data: any) : Promise<any> {
    var url = '/helpBubble/nDelete?id=' + data.id;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }
  // ----------- ./help-bubble api ------------ //

  // =============== People Tab ------ Search bar Action Features ================ //
  savePeopleSearchQuery(data: any) : Promise<any> {
    var url = "/savedSearch/wCreate";
    var params = {
      name: data.name,
      queryJson: data.queryJson,
      scope: "person"
    };

    return new Promise((resolve, reject) => {
      this.http.post(url, params).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  getListData() : Promise<any> {
    var url = "/savedSearch/wList?scope=person";

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  deleteSavedSearch(objId) : Promise<any> {
    var url = "/savedSearch/nDelete?id=" + objId;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  setIsNotify(savedSearchId, isNotify) : Promise<any> {
    var url = '/savedSearch/nUpdateIsNotify' +
                '?id=' + savedSearchId +
                '&isNotify=' + isNotify;

    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveExportCsv(data) : Promise<any> {
    var url = '/person/wDownloadCsv';

    return new Promise((resolve, reject) => {
      this.http.post(url, data).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  sendByMail(data) : Promise<any> {
    var url = '/person/wSendByMail';

    return new Promise((resolve, reject) => {
      this.http.post(url, data).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

  saveResumeFile(file) : Promise<any> {
    var url = '/person/wUpload';

    var fd = new FormData();
    fd.append('file', file);

    return new Promise((resolve, reject) => {
      this.http.post_form(url, fd).then(data => {
        resolve(data);
      }, function(error){
        reject(error);
      });
    });
  }

}
