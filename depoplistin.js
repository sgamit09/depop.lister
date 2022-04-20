const inquirer = require('inquirer'); //ask command line questions
const fs = require('fs'); //write a file to the system
const generateListing = require('./util/generateListing.js');

inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'itemType',
            message: 'Item Type. Choose One:',
            choices: ["T-shirt", "Hoodie", "Sweater", "Pants", "Hats", "Misc."],
        },
        {
            type: 'input',
            name: 'itemDescription',
            message: 'Enter item description: ',
        },
        {
            type: 'checkbox',
            name: 'flaws',
            message: 'Are there any flaws?',
            choices: ["N/A", "General Wear", "User Input",],
        },
        // {
        //     type: 'checkbox',
        //     name: 'size',
        //     message: 'What is the size of the item?',
        //     choices: ["S", "M", "L", "XL", "XXL"],
        // },
        // {
        //     type: 'input',
        //     name: 'pit2pit',
        //     message: 'What is the length pit to pit? ',
        // },
        // {
        //     type: 'input',
        //     name: 'teeLength',
        //     message: 'What is the length top to bottom? ',
        // },
        // {
        //     type: 'checkbox',
        //     name: 'closingText',
        //     message: 'Add Closing Phrase',
        //     choices: ["DM me for more information. Thanks for Looking!"],
        // },
        // {
        //     type: 'input',
        //     name: 'hashTags',
        //     message: 'Type 5 words for hashtag generation.',
        // },
        // {
        //     type: 'input',
        //     name: 'price',
        //     message: 'Enter Price: ',
        // },
    ])
    .then((answers) => {
        console.log(answers);
        console.log(typeof answers);

        fs.appendFile("inventory.txt", answers, (err) => {
            generateListing(answers);
               console.log("Generated!");
        });

        // console.log(answers.itemType);
        // console.log(answers.itemDescription);
        // console.log(answers.flaws);
        // console.log(answers.size);
        // console.log(answers.pit2pit);
        // console.log(answers.teeLength);
        // console.log(answers.closingText);
        // console.log(answers.hashTags);
        // console.log(answers.price);
    });