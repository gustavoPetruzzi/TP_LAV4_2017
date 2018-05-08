import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response,RequestOptions, Headers } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MiHttpService {

  constructor(public miHttp: Http){}

  api="http://localhost/sala/index.php/personas/";
  public httpGet(url){
    return this.miHttp.get(this.api +url)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  public httpPost(url:string, objeto:any){
    let cabecera = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let opciones = new RequestOptions({headers: cabecera} );
    return this.miHttp
    .post(this.api + url,objeto, opciones)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }
  
  /*


  constructor( public http: Http ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .post( url,objeto, cabecera )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }

  */
  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
