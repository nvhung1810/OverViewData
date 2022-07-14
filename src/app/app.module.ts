import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { AccountantViewComponent } from './components/accountants/accountant-view/accountant-view.component';
import { AccountantCreateComponent } from './components/accountants/accountant-create/accountant-create.component';
import { AccountantEditComponent } from './components/accountants/accountant-edit/accountant-edit.component';
import { AccountantListComponent } from './components/accountants/accountant-list/accountant-list.component';

// 
import { Routes, RouterModule } from '@angular/router';
import { appRouters } from './app.router';
import { LaythongtinService } from './service/laythongtin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    AccountantViewComponent,
    AccountantCreateComponent,
    AccountantEditComponent,
    AccountantListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
  ],
  providers: [
    LaythongtinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
