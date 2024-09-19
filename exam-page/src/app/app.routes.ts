import { Routes } from '@angular/router';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPassPageComponent } from './forgot-pass-page/forgot-pass-page.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPageComponent
    },
    {
        path:"instructions",
        component: InstructionPageComponent
    },
    {
        path:"forgotsignin",
        component: ForgotPassPageComponent
    }
];
