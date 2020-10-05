var argv = require('minimist')(process.argv.slice(2));
var caesar = require('./caesar');
var io = require('./io');
var validation = require('./validation');

const bigO = {
  action: undefined, // required
  shift: undefined, // required
  input: undefined, //file | console
  output: undefined // no file error required
};

function main() {
  bigO.action = argv.action ? argv.action : argv.a; // encode/decode
  bigO.shift = argv.shift ? argv.shift : argv.s; // number
  bigO.input = argv.input ? argv.input : argv.i;  
  bigO.output = argv.output ? argv.output : argv.o; 

  validation.validateInput(bigO.action, "action"); 
  validation.validateInput(bigO.shift, "shift"); 
  validation.validateInput(bigO.input, "input", false);
  validation.validateInput(bigO.output, "output", false);

  // validation.validateFilePath(bigO.input, 'input');
  // validation.validateFilePath(bigO.output, 'output');
  
  io.transformText(bigO, caesar);
}


main();


