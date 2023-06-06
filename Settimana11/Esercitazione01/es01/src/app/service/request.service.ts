import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Api } from '../models/api.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getRequest() {
    return this.http
      .get<{ data: Api[] }>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((item) => {
          console.log(item);
          return item.data;
        })
      );
  }
  methodDelete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
}
