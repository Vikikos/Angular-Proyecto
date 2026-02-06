import { Routes } from '@angular/router';
import { Index } from "./index/index";
import { Menu } from "./menu/menu";

export const routes: Routes = [
    {path:'', component: Index, title:'Inicio'},
    {path:'carta', component: Menu, title:'Nuestra Carta'}
];
