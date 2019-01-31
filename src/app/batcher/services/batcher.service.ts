import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatcherService {

  constructor() { }

  request<T>(httpRequest: HttpRequest<T>): Observable<T> {
    return null;
  }

}
