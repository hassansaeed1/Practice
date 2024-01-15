//rest parameter 

function pizza(myFav:string,...others:string[]){
    return`my favt flavour: ${myFav} others : ${others.join(" ")}`
}

console.log(pizza("bbq","lasania","fajita","mix"))