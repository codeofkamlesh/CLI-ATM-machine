#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 8000;
let pin = 112233;
let pinAns = await inquirer.prompt([
    {
        message: "Enter your pin number", type: "number", name: "pininput"
    }
]);
if (pinAns.pininput === pin) {
    console.log("your pin number is correct");
    let operation = await inquirer.prompt([
        {
            message: "what you want to do ?", type: "list", name: "op_choice",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operation.op_choice === "withdraw") {
        let amount = await inquirer.prompt([
            {
                message: "Enter the amount", type: "number", name: "amount_input"
            }
        ]);
        if (amount.amount_input <= balance) {
            balance -= amount.amount_input;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log("you have insufficient balance");
        }
    }
    else if (operation.op_choice === "fast cash") {
        let fastamount = await inquirer.prompt([
            {
                message: "select amount you want to withdraw ", type: "list", name: "f_amount",
                choices: ["2000", "5000", "7000", "10000"]
            }
        ]);
        let selectedAmount = parseInt(fastamount.f_amount);
        if (selectedAmount <= balance) {
            balance -= selectedAmount;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log("you have insufficient balance");
        }
    }
    else if (operation.op_choice === "check balance") {
        console.log(`your balance is ${balance}`);
    }
}
else {
    console.log("you pin number is incorrect");
}
