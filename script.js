function square1(number1, number2) {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
}
result1 = square1(2,3);
console.log(result1);

const square2 = function (number3, number4) {
    return ((number3 * number3) + (number4 * number4)) * ((number3 * number3) + (number4 * number4));
  };
  result2 = square2(2,3);
  console.log(result2);

  const square3 = (number5, number6) => {
    return ((number5 * number5) + (number6 * number6)) * ((number5 * number5) + (number6 * number6));
  };
  result3 = square3(2,3);
  console.log(result3);