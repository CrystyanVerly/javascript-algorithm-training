function classifyNumber(n) {
	const rest = n % 2;
	const isPos = n > 0;
	if (n === 0) return 'zero-even';
	if (rest !== 0) {
		if (!isPos) return 'negative-odd';
		return 'positive-odd';
	}
	if (!isPos) return 'negative-even';
	return 'positive-even';
}

console.log(classifyNumber(8));
// "positive-even"

console.log(classifyNumber(7));
// "positive-odd"

console.log(classifyNumber(-4));
// "negative-even"

console.log(classifyNumber(-3));
// "negative-odd"

console.log(classifyNumber(0));
// "zero-even"
