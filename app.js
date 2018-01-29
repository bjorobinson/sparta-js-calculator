var mode = prompt("Input mode: (b)asic, (a)dvanced, (bmi) calculator");
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
        throw 'InvalidInputError';
    }
    console.log(calc);
    break;
  case 'a':
    var action = prompt("Input square or square root function in the for: 2^3 or | 8");
    var calc = action.split(" ");
    if (calc[1]==='^'){
      calc[0] = parseInt(calc[0]);
      calc[2] = parseInt(calc[2]);
      alert(Math.pow(calc[0],calc[2]));
    } else if (calc[0]==='|') {
      calc[1] = parseInt(calc[1])
      alert(Math.sqrt(calc[1]))
    } else {
      throw 'InvalidInputError';
    }
    break;

  case 'bmi':
    var action = prompt("Enter your height(meters or inches), weight (kilograms and pounds), and number system used (met)ric or (imp)erial");
    var calc = action.split(" ");
    calc[0] = parseInt(calc[0]);
    calc[1] = parseInt(calc[1]);
    if (calc[2]==='imp') {
      alert(calc[1]/(Math.pow(calc[0],2))*703);
    } else if (calc[2]==='met') {
      alert(calc[1]/(Math.pow(calc[0],2)));
    } else {
      throw 'InvalidInputError'
    }

  default:
    console.log("Quitting");
}
