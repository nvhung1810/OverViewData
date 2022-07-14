
import { AccountantViewComponent } from './components/accountants/accountant-view/accountant-view.component';
import { AccountantCreateComponent } from './components/accountants/accountant-create/accountant-create.component';
import { AccountantEditComponent } from './components/accountants/accountant-edit/accountant-edit.component';
import { AccountantListComponent } from './components/accountants/accountant-list/accountant-list.component';

// 
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const appRouters: Routes = [
    {
        path: '',
        component: AccountantListComponent
    },
    {
        path: 'accountants',
        component: AccountantViewComponent,
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
                component: AccountantListComponent
            },
        ]
    },
];