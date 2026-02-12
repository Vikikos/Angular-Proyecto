import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlate } from '../interfaces/i-plate';
import { MenuEdit } from '../menu-edit/menu-edit';

@Component({
    selector: 'menu-item',
    imports: [CommonModule,MenuEdit],
    templateUrl: './menu-item.html',
    styleUrl: './menu-item.css',
})
export class MenuItem {
    @Input() plate! : IPlate;

    @Output() idDelete = new EventEmitter<string>();

    deletePlate() {
        this.idDelete.emit(this.plate.id);
    }

    @Output() plateElable = new EventEmitter<IPlate>();

    changeEnable() {
        this.plateElable.emit(this.plate);
    }

    viewEditForm() {
        console.log('si')
        document.getElementById('editForm')!.style.display = 'block';
    }
}
