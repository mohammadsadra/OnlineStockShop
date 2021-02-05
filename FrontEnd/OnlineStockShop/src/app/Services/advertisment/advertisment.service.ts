import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdDTO} from '../../DTOs/AdDTO';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

  constructor(private http: HttpClient) {
  }

  getAdvertisment(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://localhost:44365/ToplearnShop/GetAdvertisment');
  }

  postAd(ad: AdDTO): Observable<AdDTO> {
    return this.http.post<AdDTO>('https://localhost:44365/ToplearnShop/createAdvertisment', ad);
  }
}
