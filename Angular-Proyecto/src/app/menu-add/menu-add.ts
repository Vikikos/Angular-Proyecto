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
        enabled: false
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
            enabled: false
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
    maxChars(max: number, inputName: string) {
        const divError =  document.getElementById(`error${inputName}`);
        let text = '';
        if(inputName == 'name'){
            text = this.newPlate.name.length > 50? 'Maximo de caracteres alcanzado 50' : '';
        }
        if(inputName == 'description' ){
            text = this.newPlate.description.length > 200? 'Maximo de caracteres alcanzado 200' : '';
        }
        divError!.textContent = text;
    }
    priceValidation(){
        const divError =  document.getElementById('errorprice');
        let text = '';
        text = this.newPlate.price < 0? 'El precio debe ser un numero positivo' : '';
        divError!.textContent = text;
    }
}
