function validateInput(param, name, required = true) {
    if (!param && required) {
      console.error(`Parameter --${name} is required`);
      process.exit(1);
    }
  }

function validateAction(param, name, val1 = 'encode', val2 ='decode') {
  if(param === val1 || param === val2) return true;
  console.error(`Parameter --${name} valid values are: ${val1}/${val2}`);
  process.exit(1);
}

function validateShift(param, name) {
  if(param != 0 && !param) {
    console.error(`Parameter --${name} is required`);
    process.exit(1);
  }
  if(!Number.isInteger(param)) {
    console.error(`Parameter --${name} must contain positive integer`);
    process.exit(1);
  }
}

module.exports = {
    validateInput: validateInput,
    validateShift: validateShift,
    validateAction: validateAction
}