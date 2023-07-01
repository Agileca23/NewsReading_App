// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
API_KEY:''64a0a47357c2a4.74379516,
API_URL:'https://eodhistoricaldata.com/financial-apis/'
export const environment = {
  production: false
};
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
      this.httpClient.get(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`).subscribe(results =>{
        console.log(results);
    })
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
