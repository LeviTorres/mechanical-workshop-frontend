import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/interfaces/client.intreface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.css'],
})
export class AddClientPageComponent implements OnInit {
  private _clientService = inject(ClientsService);
  private _messageService = inject(MessageService);
  private _router = inject(Router);
  public form: FormGroup = new FormGroup({
    key_client: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phone_number: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl(''),
  });

  ngOnInit() {}

  addClient() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const element: Client = {
      ...this.form.value,
      isActive: true,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    console.log({ element });
    this._clientService.createClient(element).subscribe(
      (client: Client) => {
        console.log({ client });
        this._router.navigateByUrl('/clients');
      },
      (error: any) => {
        console.log({ error });
      }
    );
  }
}
