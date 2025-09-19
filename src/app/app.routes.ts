import { Routes } from '@angular/router';
import { BodyComponent } from './components/body-component/body-component';
import { SuccessComponent } from './components/success-component/success-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'beat/:id', component: BodyComponent},
    { path: 'success', component: SuccessComponent},
    { path: '**', redirectTo: '/home'}
];
