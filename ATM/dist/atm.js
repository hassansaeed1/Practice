import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Develp by Hassan Sheikh \n--Lets start ATM--`);
    await sleep();
    rainbowTitle.stop();
}
welcome();
var answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your pin"
    }, {
        type: "list",
        name: "accountType",
        choices: ["saving", "current"],
        message: "select your account type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast cash", "withdraw"],
        message: "select your transaction",
        when(answer) {
            return answer.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000],
        message: "select your amount",
        when(answer) {
            return answer.transactionType == "Fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answer) {
            return answer.transactionType == "withdraw";
        }
    }
]);
if (answer.userId && answer.userPin) {
    var balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    var EnterAmount = answer.amount;
    if (balance >= EnterAmount) {
        var remining = balance - EnterAmount;
        console.log("Your remining balance ", remining);
    }
    else {
        console.log(`Insufficet Balance`);
    }
}
