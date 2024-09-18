import { Routes } from '@angular/router';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPageComponent
    },
    {
        path:"instructions",
        component: InstructionPageComponent
    }
];
