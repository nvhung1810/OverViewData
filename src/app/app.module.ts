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
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';   

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// 
import { Routes, RouterModule } from '@angular/router';
import { appRouters } from './app.router';
import { LaythongtinService } from './service/laythongtin.service';
import { HttpClientModule } from '@angular/common/http';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    AccountantViewComponent,
    AccountantCreateComponent,
    AccountantEditComponent,
    AccountantListComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    LaythongtinService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
