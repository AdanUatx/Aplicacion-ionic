import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(
    private rest: HttpClient
  ) { }

  urlBase =  'http://localhost:9000/cine/';
  header = { headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }
  };

  obtenerCines(): Observable<any> {
    return  this.rest.get(this.urlBase+'obtener',this.header).pipe( map ( res => {
      return res;
    }));
  }
}
