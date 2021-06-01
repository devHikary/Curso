import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { multicast } from 'rxjs/operators';
import { ResquestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule],
    providers:[
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ResquestInterceptor,
        multi: true
      }
    ]
})
export class CoreModule {

}
