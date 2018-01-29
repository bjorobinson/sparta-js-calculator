var mode = prompt("Input mode: (b)asic, (a)dvanced")
switch (mode) {
  case 'b':
    console.log("Basic");
    var action = prompt("Input a basic sum with two integers, seperated by space, and using +, -, *, or /");
    var calc = action.split(" ");
    var operator = calc[1];
    switch (operator) {
      case '+':
        console.log('+');
        break;
      case '-':
        console.log('-');
        break;
      case '*':
        console.log('*');
        break;
      case '/':
        console.log('/');
        break;
      default:
        console.log("invalid sum");
        throw 'Error';
    }
    console.log(calc);
    break;
  case 'a':
    console.log("Advanced");
    break;
  default:
    console.log("Quitting");
}
