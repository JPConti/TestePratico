const str = prompt('Digite uma palavra para inverter:');

let invertedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
  invertedStr += str[i];
}

console.log(`A palavra ${str} invertida é ${invertedStr}.`);
