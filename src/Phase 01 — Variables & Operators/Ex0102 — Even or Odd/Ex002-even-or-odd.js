function evenOrOdd(n) {
	const rest = n % 2;

	if (rest !== 0) return 'odd';

	return 'even';
}
console.log(evenOrOdd(8));
// "even"

console.log(evenOrOdd(7));
// "odd"

console.log(evenOrOdd(0));
// "even"
