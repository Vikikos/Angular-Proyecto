import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { MenuAdd } from '../menu-add/menu-add';
import { MenuEdit } from '../menu-edit/menu-edit';

@Component({
  selector: 'gestion',
  imports: [Menu,MenuAdd,MenuEdit],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion {

}
