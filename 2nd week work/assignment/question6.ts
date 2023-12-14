/*Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm
 clothes and so on according to the weather*/

 function suggestClothesBasedOnWeather(temperature:number){
    if(temperature<30){
        return "It's cold outside. You should wear coat "
    }else if(temperature>=30 && temperature<=45){
        return "It's cold outside. You should wear a light jacket"
    }else if(temperature>=45 && temperature<=55){
        return "It's warm outside. You should wear shorts or T-shirt"
    }else{
        "It's hot outside.You should wear shorts etc"
    }
 }
 let temperature:number=37
 var clothesSuggestion=suggestClothesBasedOnWeather(temperature)
 console.log(clothesSuggestion)