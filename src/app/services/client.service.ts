import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client";
import {environment} from "../../environments/environments";
import {ApiResponse} from "../common/api-response";
import {Observable} from "rxjs";
import {ApiService} from "../common/api-service";

const URL = 'client';

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor(private http: HttpClient, private apiService: ApiService) {

  }

  public clients : Client[] | undefined;
  fetchAll(): Observable<Client[]> {
    try {
      return this.apiService.get<Client[]>(URL);

    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}
