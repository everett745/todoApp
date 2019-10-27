import { Injectable } from '@angular/core';
import {CreateResponse, toDo} from '../models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ToDoService {

  constructor(private http: HttpClient) { }

  addLi(li: toDo): Observable<toDo> {
    return this.http.post(`${environment.bdUrl}/li.json`, li)
      .pipe(map((response: CreateResponse) => {
        return {
          ...li,
          id: response.name
        }
      }))
  }

  getAll(): Observable<toDo[]> {
    return this.http.get(`${environment.bdUrl}/li.json`)
      .pipe(map((resp: {[key: string]: any}) => {
          return Object
            .keys(resp)
            .map(key => ({
              ...resp[key],
              id: key
            }));
        })
      );
  }

  change(toDo: toDo) {
    return this.http.patch(`${environment.bdUrl}/li/${toDo.id}.json`, toDo);
  }

  getById(id: string): Observable<toDo> {
    return this.http.get<toDo>(`${environment.bdUrl}/li/${id}.json`)
      .pipe(map((post: toDo) => {
        return {
          ...post, id
        };
      }));
  }

  remove(id: string){
    return this.http.delete<void>(`${environment.bdUrl}/li/${id}.json`);
  }
}
