/*Write a program that calculates the discount for a product based on its price. If the price is
 above $100, apply a 10% discount; otherwise, apply a 5% discount*/

 function calculatesTheDiscount(price:number){
    if(price>100){
        return price*0.9
    }else {
        return price*0.95
    }
 }
 var price:number=120
 var discountPrice=calculatesTheDiscount(price)
 console.log(`The discounted price is ${discountPrice}`)