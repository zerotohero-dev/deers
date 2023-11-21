import test from 'ava';
import deers from '.';

test('main', t => {
	const deerList = deers();
	console.log('Deers:', deerList.length);
	t.true(Array.isArray(deerList));
	t.true(deerList.length > 0);
});
