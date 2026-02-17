import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Job } from '../models/job.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private appId = environment.adzunaAppId;
  private appKey = environment.adzunaAppKey;
  private baseUrl = 'https://api.adzuna.com/v1/api/jobs';

  constructor(private http: HttpClient) {}

  searchJobs(keyword: string, location: string, page: number = 1): Observable<{ jobs: Job[], total: number }> {
    const country = 'gb';
    const url = `${this.baseUrl}/${country}/search/${page}`;

    const params: any = {
      app_id: this.appId,
      app_key: this.appKey,
      results_per_page: '10',
      what_and: keyword,
      sort_by: 'date'
    };

    if (location) {
      params.where = location;
    }

    return this.http.get<any>(url, { params }).pipe(
      map(response => ({
        jobs: response.results.map((item: any) => this.mapToJob(item)),
        total: response.count || 0
      }))
    );
  }

  private mapToJob(item: any): Job {
    return {
      id: item.id?.toString() || '',
      title: item.title || '',
      company: item.company?.display_name || 'Non spécifié',
      location: item.location?.display_name || 'Non spécifié',
      description: item.description || '',
      url: item.redirect_url || '',
      salary: item.salary_is_predicted === '1'
        ? `${item.salary_min || ''} - ${item.salary_max || ''} GBP`
        : (item.salary_min ? `${item.salary_min} GBP` : 'Non spécifié'),
      date: item.created || '',
      apiSource: 'adzuna'
    };
  }
}
