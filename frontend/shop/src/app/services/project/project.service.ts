import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(protected http: HttpClient) {}

  getProjects(): Observable<any> {
    let ruta = [environment.apiUrl,  'roject'].join('/');
    return this.http.get(ruta);
  }

  getProjectId(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    return this.http.get(ruta);
  }

  addProject(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project'].join('/');
    return this.http.post(ruta, usr);
  }

  editProject(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    return this.http.put(ruta, usr);
  }

  deleteProject(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'project', id].join('/');
    return this.http.delete(ruta);
  }
}
