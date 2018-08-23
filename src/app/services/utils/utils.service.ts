import { Injectable } from '@angular/core';

import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    constructor() { }
    
    urlFacets(data:any) {
        var b = [];
        var uploadUrl = [];
        _.forEach(data, function(value, key) {
            var a = [];
            b.push(a);
            _.map(value.key, (v) => { a.push(v);});
            if (a.length > 0) {
                var keyUrl = '?' + value.facetName + '=';
                uploadUrl.push(keyUrl, a);
            }
        });
        return this.encodeUriQuery(uploadUrl);
    }
    
    encodeUriQuery(val:any) {
        return encodeURIComponent(val).
            replace(/%3D%2C/gi, '=').
            replace(/%3D/gi, '=').
            replace(/%2C%20/gi, ', ').
            replace(/%2C%3F/gi, '&').
            replace(/%2C/gi, '|').
            replace(/%3F/gi, '&').
            replace(/%20/gi, ' ').
            replace(/%2B/gi, '+').
            replace(/%2F/gi, '/');
    }
    
    setFacet(bool:any, item:any, facetName:any, dataCheckFacets:any, isMore:any) {
        var facetName = isMore ? facetName + 'More' : facetName;

        if (bool) {
            var data = {
                facetName: facetName,
                key: [item],
            };
            if (dataCheckFacets.length === 0) {
                dataCheckFacets.push(data);
            } else {
                var checkFacetName = [];
                _.forEach(dataCheckFacets, function(value, key) {
                    if (value.facetName === facetName) {
                        value.key.push(item);
                    }
                    checkFacetName.push(value.facetName);
                });
                if (checkFacetName.indexOf(facetName) === -1) {
                    dataCheckFacets.push(data);
                }
            }
        } else {
            _.forEach(dataCheckFacets, function(value, key) {
                if (facetName === value.facetName) {
                    for (var i1 = 0; i1 < value.key.length; i1++) {
                        if (value.key[i1] === item) {
                            value.key.splice(i1, 1);
                        }
                    }
                }
            });
        }
        return dataCheckFacets;
    }
}