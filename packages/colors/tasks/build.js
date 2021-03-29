'use strict';

const fs = require("fs-extra");

const source = 'src/scss'
const destination = 'scss'

fs.copy(source, destination, (err) => {
    if (err){
        console.log('An error occured while copying the folder.');

        return console.error(err);
    }

    console.log('Copy completed!');
});
