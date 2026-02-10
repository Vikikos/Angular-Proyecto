import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlate } from '../interfaces/i-plate';

@Component({
  selector: 'menu-item',
  imports: [CommonModule],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class MenuItem {
  @Input() plate! : IPlate;
}
