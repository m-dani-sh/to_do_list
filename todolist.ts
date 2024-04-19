#!/usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition){
    
    let addtask = await inquirer.prompt(
        [
            {
                name: "todo",
                message: "What do you want to add in todos?",
                type: "input"
            },
            {
                name: "addmore",
                message: "Do you want to add more?",
                type: "confirm",
                default: true
            }
        ]   
    );

    todos.push(addtask.todo); 
    console.log(todos);

    condition = addtask.addmore;
}
