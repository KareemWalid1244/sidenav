import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://localhost:44369/api/User/GetAllUsers')
      .pipe(
        map((response:any) => response.map((product:any) => product['name']))
        )
  }
}