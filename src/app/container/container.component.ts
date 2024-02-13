import { Component,ViewChild} from '@angular/core';
import{ProductlistComponent}from'./productlist/productlist.component'



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText:string='';
  setSearchText(value:string){
    console.log("hello");
    this.searchText=value;
  }

  @ViewChild("ProductlistComponent") productListComponent:ProductlistComponent  
  //Name="John Doe";
//   addToCart:number=0;
  //  listOfString:string[]=["vaibhav","dharmik","mitul","naitik"];
  //  item:string[]=["vaibhav","dharmik","mitul","naitik"];
  
//   // here we create product object
//  product={
//     name:"iPhone 15",
//     price: 999,
//     color:"Black",
//     dprice:8.5,
//     inStock:10,
//     pImage:"/assets/images/image1.jpg"
//   }
  
//   // here we create method getDiscountedPrice 
//   getDiscountedPrice(){
//     return this.product.price-(this.product.dprice*this.product.price)/100
//   }

//   getinStock(){
//         // here we use ternary operator
//         return (this.product.inStock)>0 ?  (this.product.inStock + " items left")   : "not in stock"
//   }

//   onChangeName(event:any){

//     // here we use event which create one object in the console 
//     // that InputEvent have target and that have value which is store in the Name
//     //this.Name=event.target.value;
//     // console.log(event.target.value);
//    }

//    decrementValue(){
//     if(this.addToCart>0){
//       this.addToCart--;
//     }
//    }
//    incrementValue(){
//        if(this.addToCart<this.product.inStock){
//         this.addToCart++;
//        }
//    }
}
