function caesarCipher(string, shift){
  shift = shift % 26;
  return string.split("").map(char => {
    const charCode = char.charCodeAt(0);
    const isCharLowerCase = charCode >= 97 && charCode <= 122;
    const isCharUpperCase = charCode >= 65 && charCode <= 90;

    if (!isCharLowerCase && !isCharUpperCase) {
      return char;
    }

    let charTransformedCode = (charCode + shift);

    // lowercase
    if (isCharLowerCase && (charTransformedCode > 122)){
      charTransformedCode -= 26;
    }

    // uppercase
    if (isCharUpperCase && (charTransformedCode > 90)){
      charTransformedCode -= 26;
    }
    
    return String.fromCharCode(charTransformedCode);
  }).join("");
}

caesarCipher("abcde", 1);

module.exports = caesarCipher;