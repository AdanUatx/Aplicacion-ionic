import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(
    private rest: HttpClient
  ) { }

  urlBase =  'http://localhost:9000/sala/';
  header = { headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }
  };

  obtenerSalas(): Observable<any> {
    return  this.rest.get(this.urlBase+'obtener',this.header).pipe( map ( res => {
      return res;
    }));
  }

  obtenerSala(id): Observable<any>{
    return  this.rest.get(this.urlBase+'obtener/id?idSala='+id,this.header).pipe( map ( res => {
      return res;
    }));
  }

  guardarSala(sala) {
    return  this.rest.post(this.urlBase+'guardar',null,this.header).pipe( map ( res => {
      return res;
    }));
  }

  activarInactivar(idSala) {
    return  this.rest.put(this.urlBase+'activar-inactivar?idSala='+idSala,this.header).pipe( map ( res => {
      return res;
    }));
  }


}
