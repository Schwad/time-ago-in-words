const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.timeAgoInWords(new Date('2022-01-01'), new Date('2022-04-02')), '3 months ago');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);