import { Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';

export const routes: Routes = [
    {path: 'dashboard', component: PlaceholderComponent},
    {path: 'orders', component: PlaceholderComponent},
    {path: 'products', component: PlaceholderComponent},
    {path: 'categories', component: PlaceholderComponent},
    {path: 'customers', component: PlaceholderComponent},
    {path: 'reports', component: PlaceholderComponent},
    {path: 'coupons', component: PlaceholderComponent},
    {path: 'index', component: PlaceholderComponent},
    {path: 'knowledge-base', component: PlaceholderComponent},
    {path: 'product-updates', component: PlaceholderComponent},
    {path: 'personal-settings', component: PlaceholderComponent},
    {path: 'global-settings', component: PlaceholderComponent},
    {path: '**', component: PlaceholderComponent}
];
