import { Component, OnInit, inject } from '@angular/core';
import { Client } from 'src/app/interfaces/client.intreface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  private _clientService = inject(ClientsService);

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this._clientService.getClients().subscribe((clients: Client[]) => {
      console.log({ clients });
    });
  }
}
