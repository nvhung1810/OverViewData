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

// primeng-angular
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';   
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';


import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// 
import { Routes, RouterModule } from '@angular/router';
import { appRouters } from './app.router';
import { LaythongtinService } from './service/laythongtin.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from './pipes/filter.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {RippleModule} from 'primeng/ripple';

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
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    InputNumberModule
  ],
  providers: [
    LaythongtinService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



