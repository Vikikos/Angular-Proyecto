import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlate } from '../interfaces/i-plate';
import { MenuEdit } from '../menu-edit/menu-edit';
import { IUser } from '../interfaces/i-user';

@Component({
    selector: 'menu-item',
    imports: [CommonModule,MenuEdit],
    templateUrl: './menu-item.html',
    styleUrl: './menu-item.css',
})
export class MenuItem {
    @Input() plate! : IPlate;
    @Input() userSession! : IUser;

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
        document.getElementById('editForm'+ this.plate.id)!.style.display = 'block';
    }
    @Output() changedPlate = new EventEmitter<IPlate>();
    changePlate(plate: IPlate) {
        this.changedPlate.emit(plate);
        document.getElementById('editForm'+ this.plate.id)!.style.display = 'none';
    }
}
