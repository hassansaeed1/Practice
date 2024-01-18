import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep= ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}
async function wellcome(){
    let rainbowTitle =chalkAnimation.rainbow(`lets start calculation`);
    await sleep();
    rainbowTitle.stop();
}
// wellcome();


async function askQuestion(){
    inquirer
    .prompt([
        {
            type:"list",
            name:"operator",
            massage:"Which operator do you want to parfrom? \n",
            
            choices:["+","-","*","/"]
        },
        {
            type:Number,
            name:"num1",
            massage:"Enter number 1: "
        },
        {
            type:Number,
            name:"num2",
            massage:"Enter number 2: "
        }
    ])
    .then((answers)=>{
//console.log(answers)
if(answers.operator=="+"){
    console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)
}else if(answers.operator=="-"){
    console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
}else if(answers.operator=="*"){
    console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
}else if(answers.operator=="/"){
    console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
}
    })
}
askQuestion()











