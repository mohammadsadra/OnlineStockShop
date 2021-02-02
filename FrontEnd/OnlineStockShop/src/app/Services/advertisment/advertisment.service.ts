import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

  constructor(private http: HttpClient) {
  }

  getAdvertisment(): Observable<any> {
    return this.http.get('https://localhost:44365/ToplearnShop/GetAdvertisment');
  }
}
