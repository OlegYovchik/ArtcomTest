import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})

export class GetJsonService {
  constructor(private http: HttpClient) { }

  getJson():Observable<any>{
    return this.http.get(environment.urlJson);
  }
}
