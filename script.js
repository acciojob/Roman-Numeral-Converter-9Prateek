function integerToRoman(num) {
  if (typeof num !== 'number' || num <= 0 || num >= 4000) {
    throw new Error('Input must be an integer between 1 and 3999');
  }

  const values  = [1000, 900, 500, 400, 100,  90,   50,   40,   10,   9,    5,   4,    1];
  const symbols = ['M',  'CM', 'D',  'CD', 'C', 'XC', 'L',  'XL',  'X',  'IX', 'V', 'IV', 'I'];

  let roman = '';
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += symbols[i];
      num   -= values[i];
    }
  }
  return roman;
}

// Examples:
console.log(integerToRoman(14)); 
console.log(integerToRoman(1994)); 
console.log(integerToRoman(3));   
