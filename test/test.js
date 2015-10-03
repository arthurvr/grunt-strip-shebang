import fs from 'fs';
import test from 'ava';

test('Removes shebangs', t => {
	t.is(fs.readFileSync('./test/tmp/fixture.sh').toString(), '\n\necho "hi"\n');
	t.end();
});
