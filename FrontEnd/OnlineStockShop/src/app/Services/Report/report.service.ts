import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReportDTO} from '../../DTOs/ReportDTO';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  creatReport(report: ReportDTO): Observable<ReportDTO> {
    return this.http.post<ReportDTO>('https://localhost:44365/Report/CreateReport', report);
  }
}
