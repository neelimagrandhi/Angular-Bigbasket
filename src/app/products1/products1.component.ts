import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products1',
  templateUrl: './products1.component.html',
  styleUrls: ['./products1.component.scss']
})
export class Products1Component implements OnInit {

  product = {
    id:null,
    name:null,
    price:null,
    quantity:null
  }

  productName = null
  productPrice = null

  productList =[]
  selectedList = []
  filterList =[]

  searchProductName = null

  ngOnInit(){
    this.productList = [
      {id:1,name:'oranges',price:250,quantity:4},
      {id:2,name:'mango',price:100,qua:1},
      {id:3,name:'oil',price:400},
      {id:4,name:'maggi',price:12},
      {id:5,name:'noodles',price:200}
    ]
    this.filterProductList()
  }

  filterProductList(){
    if(this.searchProductName){
      let searchElement = this.searchProductName.toLowerCase()
        this.filterList = Object.assign([], this.productList).filter(
          data => (data.name.toLowerCase() == searchElement)
        )
    }else{
      this.filterList = Object.assign([],this.productList)
    }
  }

  addProduct(productForm :NgForm){
    if(this.productList.find(data => data.name == productForm.value.productName)){
      alert(productForm.value.productName + " already exists")
    }else{
      let sno = this.productList.length + 1
      this.productList.push ({id: sno , name : productForm.value.productName , price : productForm.value.productPrice, quantity : productForm.value.quantity})
      this.filterProductList()
    }
    this.productName = null
    this.productPrice = null
  }

  selectedProduct(id:number){
    this.product = this.productList.find(data => data.id == id)
    if(this.product){
       if(this.selectedList){
         if(this.selectedList.find(data => data.id == id)){
          alert(this.product.name + " already exists")
         }else{
          this.selectedList.push(this.product)
         }
       }else{
        this.selectedList.push(this.product)
       }
    }
  }
  
  completed(){
    if(this.selectedList){
      this.selectedList = []
    }
    alert("Completed")
  }
}

