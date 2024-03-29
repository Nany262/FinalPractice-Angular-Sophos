import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  public urlApi: string = environment.urlApi;

  constructor(public http: HttpClient) {}

  public getInformation(numberOfUsers): Observable<User> {
    return this.http.get<User>(this.urlApi + numberOfUsers);
  }
}
