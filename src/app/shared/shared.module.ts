import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
@NgModule({
  declarations: [],
  imports: [NgxMaskDirective, NgxMaskPipe],
  exports: [ToastModule, ProgressSpinnerModule, ReactiveFormsModule],
  providers: [MessageService, provideNgxMask()],
})
export class SharedModule {}
