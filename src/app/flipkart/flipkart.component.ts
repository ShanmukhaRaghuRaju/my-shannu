import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  items:any=[
    {ProductName:'pen',Price:20,Rating:4,FreeDelivery:'False'},
    {ProductName:'Iphone',Price:110000,Rating:4.5,FreeDelivery:'True'},
    {ProductName:'Shirt',Price:2000,Rating:3,FreeDelivery:'False'},
    {ProductName:'Cap',Price:400,Rating:1.5,FreeDelivery:'True'},
    {ProductName:'MobileCase',Price:100,Rating:1,FreeDelivery:'False'},
    {ProductName:'Remote',Price:450,Rating:5,FreeDelivery:'False'},
    {ProductName:'Watch',Price:5000,Rating:2,FreeDelivery:'False'},
    {ProductName:'Chapal',Price:8000,Rating:1.5,FreeDelivery:'True'},
    {ProductName:'bag',Price:12000,Rating:4,FreeDelivery:'True'},

  ]
  delete(index:number){
    this.items.splice(index,1)
   
  }
  check:any=""
  search(){
    this.items=this.items.filter((item:any)=>item.ProductName.includes(this.check))
  }
  pricelow(){
    this.items=this.items.sort((a:any,b:any)=>a.Price-b.Price)

  }
  pricehigh(){
    this.items=this.items.sort((a:any,b:any)=>b.Price-a.Price)

  }
  ratinglow(){
   this.items=this.items.sort((a:any,b:any)=>a.Rating-b.Rating)

  }
  ratinghigh(){
    this.items=this.items.sort((a:any,b:any)=>b.Rating-a.Rating)
    
  }
  apply(){
    this.items=this.items.map((item:any)=>{item.Price=item.Price/2;
    return item})
  }
  totalcost(){
      let totalcost=this.items.reduce((sum:any,item:any)=>sum+item.Price,0);
      alert(totalcost) 

}

totalitems(){
  this.totalitems=this.items.length;
  alert(this.totalitems)

}


     itname:any='';
      itprice:any='';
       itrating:any='';
       itdelivery:any='';
add(){
  let user={
   ProductName:this.itname,
    Price:this.itprice,
    Rating:this.itrating,
    FreeDelivery:this.itdelivery
  };
  this.items.unshift(user)
}
free(){
 this.items= this.items.filter((item:any) => item.FreeDelivery == 'True')

}
charge() {
  this.items = this.items.map((item: any) => {
    return {
      ProductName: item.ProductName,
      Price: item.FreeDelivery == 'False' ? item.Price + 100 : item.Price,
      Rating: item.Rating,
      FreeDelivery: item.FreeDelivery
    };
  });
}



}