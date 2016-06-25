function pow (base, exponent) {
  var result = base;
  if ( exponent < 0 ) {
    var i = (-1)*exponent;
  } else {
    var i = exponent;
  }
  for ( i; i > 1; --i ) {
    result = result*base;
  }
  console.log (result);
  if (exponent > 0) {
    return result;
  } else {
    if (exponent < 0) {
      return 1/result;
    } else {
      return 0;
    }
  }
}
var firstNumber = prompt ('Введіть число');
var secondNumber = prompt ('Введіть степінь числа');
console.log ('число ', firstNumber, 'в ', secondNumber, ' степені дорівнює ', pow (firstNumber, secondNumber));
