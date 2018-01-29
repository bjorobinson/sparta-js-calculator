mode = prompt("Input mode: (b)asic, (a)dvanced")
switch (mode) {
  case 'b':
    console.log("Basic");
    break;
  case 'a':
    console.log("Advanced");
    break;
  default:
    console.log("Quitting");
}
