#! /usr/bin/env node
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
{
    message: 'Guess the number from 1 - 10: ', name: 'guessthenum', type: 'number'
}])

const randomnum = Math.floor(Math.random() * 10 );

if(randomnum == answer.guessthenum) {
    console.log(`You have guessed the right number!!,\n You input ${answer.guessthenum}\n Computer's input ${randomnum}`);
} else {
    console.log(`The number you guessed is wrong,\n You input ${answer.guessthenum}\n Computer's input ${randomnum}`);
}

