var mode = prompt("Input mode: (b)asic, (a)dvanced")
switch (mode) {
  case 'b':
    console.log("Basic");
    var action = prompt("Input a basic sum with two integers, seperated by space, and using +, -, *, or /");
    var calc = action.split(" ");
    var operator = calc[1];
    calc[0] = parseInt(calc[0]);
    calc[2] = parseInt(calc[2]);
    switch (operator) {
      case '+':
        alert(calc[0]+calc[2]);
        break;
      case '-':
        alert(calc[0]-calc[2]);
        break;
      case '*':
        alert(calc[0]*calc[2]);
        break;
      case '/':
        alert(calc[0]/calc[2]);
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
