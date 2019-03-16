import test from 'ava';
import execa from 'execa';

test('outprint something', async t => {
    const {stdout} = await execa('./cli.js', ['--version']);
    t.true(stdout.length > 0);
});