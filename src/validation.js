function validateInput(param, name, required = true) {
    if (!param && required) {
      console.error(`Parameter --${name} is required`);
      process.exit(1);
    }
  }
 
function validateFilePath(path, name) {
  
}

module.exports = {
    validateInput: validateInput,
    validateFilePath: validateFilePath
}