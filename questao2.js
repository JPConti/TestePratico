const num = parseInt(prompt('Digite um número:'));

let valueA = 0;
let valueB = 1;

const sequence = [0, 1];

while (sequence[sequence.length - 1] < num) {
  const next = valueA + valueB;
  sequence.push(next);

  valueA = valueB;
  valueB = next;
}

console.log('Sequência de Fibonacci até ' + num + ': ' + sequence.join(', '));

if (sequence.includes(num)) {
  console.log(num + ' pertence à sequência de Fibonacci.');
} else {
  console.log(num + ' não pertence à sequência de Fibonacci.');
}
