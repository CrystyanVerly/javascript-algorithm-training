function classifyNumber(n) {
	if (n < 0) return 'negative';
	if (n === 0) return 'zero';

	return 'positive';
}

console.log(classifyNumber(10));
// "positive"

console.log(classifyNumber(-5));
// "negative"

console.log(classifyNumber(0));
// "zero"
