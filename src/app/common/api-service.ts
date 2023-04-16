import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from './api-response';
import {catchError, map, Observable} from "rxjs"; // Assuming ApiResponse is a custom type for API responses
import {environment} from "../../environments/environments";
export class ApiService {

  private apiUrl = environment.api.server;

  constructor(private http: HttpClient) {
  }
  // GET method
  get<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<ApiResponse<T>>(url)
      .pipe(
        map((response: ApiResponse<T>) => {
          if (response.success) {
            return response.data;
          } else {
            throw new Error(response.error); // Throw an error if ApiResponse has success set to false
          }
        }),
        catchError((error: any) => {
          console.error(error);
          throw error; // Throw an error for any other errors
        })
      );
  }

  // POST method
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ApiResponse<T>>(url, data, { headers })
      .pipe(
        map((response: ApiResponse<T>) => {
          if (response.success) {
            return response.data;
          } else {
            throw new Error(response.error); // Throw an error if ApiResponse has success set to false
          }
        }),
        catchError((error: any) => {
          console.error(error);
          throw error; // Throw an error for any other errors
        })
      );
  }
}
