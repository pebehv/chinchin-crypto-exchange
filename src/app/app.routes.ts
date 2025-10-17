import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoverPassComponent } from './auth/recover-pass/recover-pass.component';
import { MarketMainComponent } from './shared/components/market/market-main/market-main.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverPassComponent },
  { path: 'market', component: MarketMainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];