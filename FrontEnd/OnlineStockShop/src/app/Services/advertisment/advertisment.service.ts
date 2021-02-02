import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

  constructor(private http: HttpClient) {
  }

  getAdvertisment(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://localhost:44365/ToplearnShop/GetAdvertisment');
  }
}
