import { Component, Input } from '@angular/core';
import { Menu } from "../menu/menu";
import { MenuAdd } from '../menu-add/menu-add';
import { MenuEdit } from '../menu-edit/menu-edit';
import { IUser } from '../interfaces/i-user';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'gestion',
  imports: [Menu,MenuAdd,MenuEdit, RouterLink,RouterOutlet],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion {
  userSession : IUser = JSON.parse(localStorage.getItem('userSession')!);
}
