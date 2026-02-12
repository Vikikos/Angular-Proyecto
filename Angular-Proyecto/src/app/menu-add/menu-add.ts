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
            name: '',
            description: '',
            price: 0,
            category: '',
            image: '',
            enabled: true
        }
    }

    changeImage(fileInput: HTMLInputElement) {
      if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
        this.newPlate.image = reader.result as string;
      });
    }
}
