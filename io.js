const fs = require('fs');
const readline = require('readline');
 
function inputFromFile(bigO, cipherCB) {
  let writeStream = null;
  if(isFileExist(bigO.output, 'output ')) {
    writeStream = fs.createWriteStream(bigO.output, {flags: 'a+'});
  }
  const rl = readline.createInterface({
    input: fs.createReadStream(bigO.input)
  });
  rl.on('line', (input) => {
    let result = cipherCB(bigO.action, bigO.shift, input);
    if(writeStream)
      writeStream.write(result);
    else
      console.log(result);
  });
}

function inputFromConsole(bigO, cipherCB) {
  let writeStream = null;
  if(isFileExist(bigO.output, 'output ')) {
    writeStream = fs.createWriteStream(bigO.output, {flags: 'a+'});
  }  
  const rl = readline.createInterface({
    input: process.stdin 
  });
  rl.on('line', (input) => {
    let result = cipherCB(bigO.action, bigO.shift, input);
    if(writeStream)
      writeStream.write(result);
    else
      console.log(result)
  });
}

function transformText(bigO, cipherCB) {
  if(bigO.input && isFileExist(bigO.input, 'input')) { 
    console.log('ciphered text from file')
    inputFromFile(bigO, cipherCB);
  }
  else {
    console.log('cipher text from console: ')
    inputFromConsole(bigO, cipherCB);
  }
}


function isFileExist(file_path, argName) {
  isExists = false;
  try {
    if (fs.existsSync(file_path)) {
      isExists = true; 
    }
    // else {
    //   console.error(`${argName} file not exist`);
    //   process.exit(1);
    // }
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
  return isExists;
}

module.exports = {
  transformText: transformText
}