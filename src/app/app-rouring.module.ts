import { Routes } from '@angular/router';
import { AutoSaveFormComponent } from './auto-save-form/auto-save-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
    { path: 'user-list', component: UsersListComponent },
    { path: 'form/:id', component: AutoSaveFormComponent },
    { path: 'form', component: AutoSaveFormComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: '', pathMatch: 'full', redirectTo: '/user-list' }
]

export default routes;