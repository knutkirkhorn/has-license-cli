#!/usr/bin/env node

'use strict';

const meow = require('meow');
const hasLicense = require('has-license');

const cli = meow(`
        Usage
          $ has-license <path>

        Examples
          $ has-license
          $ has-license https://github.com/knutkirkhorn/has-license
          $ has-license C:\\Users\\Knut\\Documents\\GitHub\\has-license 
`);

const path = cli.input[0];

if (path && cli.input.length === 1) {
    hasLicense(path).then(result => {
        console.log(result);
    });
} else {
    hasLicense('.').then(result => {
        console.log(result);
    });
}
