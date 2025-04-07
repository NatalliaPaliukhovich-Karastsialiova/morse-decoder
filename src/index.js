const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprInput = expr;
    let res = '';

    while(exprInput.length > 0){
      encodedChar = exprInput.substring(0,10);
      encodedChar = encodedChar.replaceAll('10', '.');
      encodedChar = encodedChar.replaceAll('11', '-');
      encodedChar = encodedChar.replaceAll('0', '');
      const decodedChar = (encodedChar === '**********') ? ' ' : MORSE_TABLE[encodedChar];
      res += decodedChar;
      exprInput = exprInput.substring(10);
    }
    return res;
}

module.exports = {
    decode
}
