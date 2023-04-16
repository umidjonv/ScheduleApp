import {Component, OnInit} from '@angular/core';
import { Client } from "../../models/client";
import { ClientService} from "../../services/client.service";
import { Subscriber} from "rxjs";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit{

  clients: Client[] = [];
  constructor(private clientService :ClientService) {
  }

  ngOnInit(): void {
    this.clientService.fetchAll().subscribe(
      (clients: Client[]) => {
        // Update clients array with data received from API
        this.clients = clients;
      },
      (error: any) => {
        console.error(error);
        // Add error handling logic here as needed
      }
    );
  }


}
