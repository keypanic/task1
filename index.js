const argv = require('minimist')(process.argv.slice(2));
const caesar = require('./caesar');
const io = require('./io');
const validation = require('./validation');
const pathing = require('./pathing');

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
  
  bigO.input = pathing.resolve(bigO.input);
  bigO.output = pathing.resolve(bigO.output);

  io.transformText(bigO, caesar);
}


main();


