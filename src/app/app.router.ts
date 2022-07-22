


// angular.module
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// 
import { AccountantCreateComponent } from './components/accountants/accountant-create/accountant-create.component';
import { AccountantEditComponent } from './components/accountants/accountant-edit/accountant-edit.component';
import { AccountantListComponent } from './components/accountants/accountant-list/accountant-list.component';
import { HomeIntroduceComponent } from './components/domain/home/home-introduce/home-introduce.component';
import { HomeViewComponent } from './components/domain/home/home-view/home-view.component';
import { LoginComponent } from './components/domain//loginAndRegister/login/login.component';
import { RegisterComponent } from './components/domain/loginAndRegister/register/register.component';
// 
export const appRouters: Routes = [
    {
        path: '',
        component: HomeViewComponent,
    },
    {
        path: 'accountants',
        // component: AccountantEditComponent,
        children: [
            {
                path: '',
                component: AccountantListComponent
            },
            {
                path: ':id/edit',
                component: AccountantEditComponent
            },
            {
                path: 'add',
                component: AccountantCreateComponent
            },
        ]
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];