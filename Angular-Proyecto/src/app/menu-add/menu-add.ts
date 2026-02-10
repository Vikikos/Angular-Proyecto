import { Component } from '@angular/core';
import { IPlate } from '../interfaces/i-plate';
import { PlateService } from '../services/plate.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'menu-add',
    imports: [FormsModule],
    templateUrl: './menu-add.html',
    styleUrl: './menu-add.css',
})
export class MenuAdd {
    newPlate: IPlate= {
        id: '',
        name: '',
        description: '',
        price: 0,
        category: '',
        image: '',
        enabled: true
    }
    constructor(private plateService: PlateService ) {}
    addPlate() {
        this.plateService.addPlate(this.newPlate).subscribe();
        this.newPlate = {
            id: '',
            name: '',
            description: '',
            price: 0,
            category: '',
            image: '',
            enabled: true
        }
    }
}
