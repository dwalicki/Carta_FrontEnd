import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';

import { Investment } from '../models/investment';

@Injectable()
export class InvestmentServiceService {

  investmentUrl: string = "https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json";

  constructor(
    private _http: Http) {  }

    getInvestments(filter: Date): Observable<Investment[]>  {
      let endpointUrl: string = this.investmentUrl;

      if(filter !== null){
        // append ?date=YYYY-MM-DD
        let dayNumber: number = filter.getDate();
        let day: string = dayNumber > 9 ? dayNumber + "" : "0" + dayNumber;

        let monthNumber: number = filter.getMonth()+1;
        let month: string = monthNumber > 9 ? monthNumber + "" : "0" + monthNumber;

        let year: string = filter.getFullYear() + "";

        let dateFilter: string = year + "-" + month + "-" + day;

        // FUTURE REFERENCE: uncomment this when the API is real and not a file storing json data
        // endpointUrl = endpointUrl + "?date=" + dateFilter
      }

      return this._http.get(endpointUrl)
          .pipe(
            map(response => {
              let investments = response.json() as Investment[];
            
              return investments;
            }
          )
        );
    }

    private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
