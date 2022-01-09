import { Routes } from '@angular/router';

export const BACKEND_LAYOUT: Routes = [
    {   path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        data: {breadcrumb: 'main'},
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];
