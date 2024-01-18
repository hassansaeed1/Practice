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
wellcome();

// async function calcutor(){
//     await inquirer
//     .prompt([ 
//         {
//             type:"list",
//             name:"operator",
//             massage:"enter your operator",
//             choices:["+","-","*","/"]
//         },
//         {
//             type:"number",
//             name:"num1",
//             massage:"enter first number"
//         },
//         {
//             type:"number",
//             name:"num2",
//             massage:"enter sceond number"
//         },
//     ])
//     .then((answers) =>{
//         //console.log(answers)
        // if(answers.operator=="+"){
        //     console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)
        // }else if(answers.operator=="-"){
        //     console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
        // }else if(answers.operator=="*"){
        //     console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
        // }else if(answers.operator=="/"){
        //     console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
        // }
//     })
// }
// calcutor()

// async function startAgain(){
//     do{
// await calcutor();
// var again=await inquirer
// .prompt([{
//     type:"input",
//     name:"restart",
//     massage: "do you want to continue? Press yes or no: "
// }])
//     }while(again.restart=="y"|| again.restart=="Y"|| again.restart=="yes"|| again.restart=="YES")
// }
// startAgain()