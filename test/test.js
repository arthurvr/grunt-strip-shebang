'use strict';
var fs = require('fs');
var test = require('ava');

test('Removes shebangs', function (t) {
	t.assert(fs.readFileSync('./test/tmp/fixture.sh').toString() === '\n\necho "hi"\n');
});
