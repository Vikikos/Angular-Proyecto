import { Routes } from '@angular/router';
import { Index } from "./index/index";
import { Menu } from "./menu/menu";
import { Login } from './login/login';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
    {path: '', component: Index, title:'Inicio'},
    {path: 'carta', component: Menu , title:'Nuestra Carta'},
    {path: 'login', component: Login, title: 'LogIn / Registro'},
    {path: 'admin', component: Gestion, title: 'Gestion - Admin'}
];
