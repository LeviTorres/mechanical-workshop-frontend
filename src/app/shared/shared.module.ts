import { NgModule } from '@angular/core';

import { MessageService } from 'primeng/api';

import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  exports: [ToastModule, ProgressSpinnerModule],
  providers: [MessageService],
})
export class SharedModule {}
