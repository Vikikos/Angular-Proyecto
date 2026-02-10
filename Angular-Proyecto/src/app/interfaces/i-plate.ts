export interface IPlate {
   id: string;
   name: string;
   description: string;
   price: number;
   category: 'entrantes' | 'principales'| 'postres' | 'bebidas' | '';
   image?: string;
   enabled: boolean;
}
