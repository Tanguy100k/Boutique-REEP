import { Routes } from '@angular/router';
import { BodyComponent } from './components/body-component/body-component';
import { SuccessComponent } from './components/success-component/success-component';

export const routes: Routes = [
    { path: '', component: BodyComponent},
    { path: 'success', component: SuccessComponent},
    { path: '**', redirectTo: ''}
];
