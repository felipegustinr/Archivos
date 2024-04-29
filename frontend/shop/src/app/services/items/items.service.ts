
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(protected http: HttpClient) { }
  
  getItems():Observable<any>{
    let route = [environment.apiUrl, 'items'].join('/');
    return this.http.get(route);
    }
}

