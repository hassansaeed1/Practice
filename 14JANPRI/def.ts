//default parameter

function info(city:string,country="pakistan"):string{
    return `${city} ${country}`
}
console.log(info("lahore"))