const fs = require('fs');
const readline = require('readline');
 
function inputFromFile(bigO, cipherCB) {
  const writeStream = outputText(bigO);
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
  const writeStream = outputText(bigO);
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

function outputText(bigO) {
  let writeStream = null;
  if(bigO.output && isFileExist(bigO.output, 'output')) { 
    writeStream = fs.createWriteStream(bigO.output, {flags: 'a+'});
  }
  return writeStream;
}

function transformText(bigO, cipherCB) {
  if(bigO.input && isFileExist(bigO.input, 'input')) { 
    inputFromFile(bigO, cipherCB);
  }
  else {
    inputFromConsole(bigO, cipherCB);
  }
}


function isFileExist(file_path, argName) {
  isExists = false;
  try {
    if (fs.existsSync(file_path)) {
      isExists = true; 
    }
    else {
      console.error(`${argName} file not exist`);
      process.exit(1);
    }
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
  return isExists;
}

module.exports = {
  transformText: transformText
}