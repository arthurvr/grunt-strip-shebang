'use strict';
var fs = require('fs');
var test = require('ava');

test('Removes shebangs', function (t) {
	t.is(fs.readFileSync('./test/tmp/fixture.sh').toString(), '\n\necho "hi"\n');
	t.end();
});
