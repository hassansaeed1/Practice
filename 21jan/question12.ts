//Q12
function cancatw_array(arr1:string[],arr2:string[]){
    let array:string=arr1.toString()
    let array2:string=arr2.toString()

    let concate_array:string=array+array2
    let concate_array3:string[]=concate_array.split(",")
    return concate_array3
}
let arr1:string[]=["ali","hassan","hamid"]
let arr2:string[]=["zain","hussain"]
console.log(cancatw_array(arr1,arr2))