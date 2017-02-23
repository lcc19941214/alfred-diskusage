import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('df ');
  const item = result[0];
  const { title, subtitle } = item;

	t.regex(title, /^Size: \d+\w+\s+Used: \d+\w+\s+Avail: \d+\w+$/g);
});
