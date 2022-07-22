// From Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

// End from Angular

    // primeng-angular
    import { AccordionModule } from 'primeng/accordion';
    import { MenuItem } from 'primeng/api';   
    import { ButtonModule } from 'primeng/button';
    import { InputNumberModule } from 'primeng/inputnumber';
    import { CarouselModule } from 'primeng/carousel';
    import { MessagesModule } from 'primeng/messages';
    import { MessageModule } from 'primeng/message';
    import { MessageService } from 'primeng/api';
    import {InputTextModule} from 'primeng/inputtext';
    import {CheckboxModule} from 'primeng/checkbox';
    import {RadioButtonModule} from 'primeng/radiobutton';
    import {TabViewModule} from 'primeng/tabview';
    import {RippleModule} from 'primeng/ripple';
    import {ToastModule} from 'primeng/toast';
    import {CalendarModule} from 'primeng/calendar';
    import {PasswordModule} from 'primeng/password';
    import {InputMaskModule} from 'primeng/inputmask';
    import {DataViewModule} from 'primeng/dataview';
    // End primeng-angular

      // FontAwesome
      import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//  Của mình 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { AccountantCreateComponent } from './components/accountants/accountant-create/accountant-create.component';
import { AccountantEditComponent } from './components/accountants/accountant-edit/accountant-edit.component';
import { AccountantListComponent } from './components/accountants/accountant-list/accountant-list.component';
import { appRouters } from './app.router';
import { LaythongtinService } from './service/laythongtin.service';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeIntroduceComponent } from './components/domain/home/home-introduce/home-introduce.component';
import { HomeViewComponent } from './components/domain/home/home-view/home-view.component';
import { LoginComponent } from './components/domain/loginAndRegister/login/login.component';
import { RegisterComponent } from './components/domain/loginAndRegister/register/register.component';

//  Kết thúc của mình 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    AccountantCreateComponent,
    AccountantEditComponent,
    AccountantListComponent,
    FilterPipe,
    HomeIntroduceComponent,
    HomeViewComponent,
    LoginComponent,
    RegisterComponent,
    // CarouselDemo
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
    // primeng
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    CarouselModule,
    CommonModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    PasswordModule,
    InputMaskModule,
    DataViewModule
  ],
  providers: [
    LaythongtinService,
    MessageService
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }

export class MyModel {
  value: Date;
}

