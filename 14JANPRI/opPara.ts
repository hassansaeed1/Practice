//optional parameter

function info(car:string,model:number,manufacturer?:string):string{
     return `${car} ${model} ${manufacturer}`
}
console.log(info("rebirth",2013))
