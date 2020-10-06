const lower_char = 97;
const upper_char = 65;

const a = 97;  
const z = 122;

const actions = {
  ENCODE: 'encode', 
  DECODE: 'decode'
};


module.exports  = function Caesar(action, shift,  str) {
  let output = '';
    if(action == actions.ENCODE) {
      output = encode(str, shift); 
    } 
    else if(action == actions.DECODE) { 
      output = decode(str, shift); 
    }
    else {
      console.error("Wrong action type.");
      process.exit(1);
    }
    return output;
}

function encode(str, shift) {
  let new_str = String(str).trim();
  let output  = Array.from(new_str).map(function(item) 
    {
      code = item.charCodeAt(0);
      if(item.charCodeAt(0) >= lower_char && item.charCodeAt(0) <= (lower_char + 25)) {
        code = ((item.charCodeAt(0) - lower_char) + parseInt(shift)) % 26;
        code += lower_char;
      }
      else if(item.charCodeAt(0) >= upper_char && item.charCodeAt(0) <= (upper_char + 25)) {
        code = ((item.charCodeAt(0) - upper_char) + parseInt(shift)) % 26;
        code += upper_char;
      }
      return String.fromCharCode(code);
    }).join('');
  return  output;
}


function decode(str, shift) {
  let new_str = String(str).trim();
  let output  = Array.from(new_str).map(function(item) 
    {
      code = item.charCodeAt(0);
      if(item.charCodeAt(0) >= lower_char && item.charCodeAt(0) <= (lower_char + 25)) {
        code = (item.charCodeAt(0) - lower_char + 26 - parseInt(shift)) % 26;
        code += lower_char; 
      }
      else if(item.charCodeAt(0) >= upper_char && item.charCodeAt(0) <= (upper_char + 25)) {
        code = (item.charCodeAt(0) - upper_char + 26 - parseInt(shift)) % 26;
        code += upper_char;
      }
      return String.fromCharCode(code);
    }).join('');
  return  output;
}
