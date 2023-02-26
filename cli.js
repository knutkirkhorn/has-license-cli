#!/usr/bin/env node

import meow from 'meow';
import hasLicense from 'has-license';

const cli = meow(`
	Usage
	  $ has-license <path>

	Examples
	  $ has-license
	  $ has-license https://github.com/knutkirkhorn/has-license
	  $ has-license C:\\Users\\Knut\\Documents\\GitHub\\has-license
`, {importMeta: import.meta});

const path = cli.input[0] && cli.input.length === 1
	? cli.input[0]
	: '.';
const repoHasLicense = await hasLicense(path);
console.log(repoHasLicense);
