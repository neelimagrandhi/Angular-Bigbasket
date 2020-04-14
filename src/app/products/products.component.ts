import { Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    title="Products list with search functionality";
  searchText;
  products = [
    { id: 1, productname: 'Potato', Price: 'Rs.35' },
    { id: 2, productname: 'Onions' , Price: 'Rs.65'},
    { id: 3, productname: 'Tomato' ,Price: 'Rs.45'},
    { id: 4, productname: 'Banana' , Price: 'Rs.35' },
    { id: 5, productname: 'Apple' , Price: 'Rs.55'},
    { id: 6, productname: 'Oranges' , Price: 'Rs.65'},
    { id: 7, productname: 'Grapes' , Price: 'Rs.35'},
    { id: 8, productname: 'Maggie' , Price: 'Rs.25'},
    { id: 9, productname: 'Pineapple' ,Price: 'Rs.35'},
    { id: 10, productname: 'Jackfruit' , Price: 'Rs.95'}
  ];
  
}

