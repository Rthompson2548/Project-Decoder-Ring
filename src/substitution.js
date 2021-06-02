const substitutionModule = (function() {

  /* create a helper funtion for message, anc both languages */
  function mapInput(message, languageA, languageB) {

      /* use the map method on the input message */
      return message.map((letter) => {

          /* for every character, check the following conditions */

          const index = languageA.indexOf(letter);

          /* create an if statement that returns any characters that
           were not found in the string */
        
          if (index === -1) return letter;
          return languageB[index];

      });
  }

  // input = string, message to be en/decoded
  // alphabet = number, the new alphabet to translate messages
  // encode = boolean, weather to encode or decode
  // translated message = string

  function substitution(input, alphabet, encode = true) {

      if (!alphabet || alphabet.length != 26) return false;

      /* create a variable that takes the correct alphabet
      string and uses the split method to return an array of 
      the letters, separated by a comma */
      const abc = "abcdefghijklmnopqrstuvwxyz".split("");

      /* create a variable that takes the alphabet argument and 
      returns it in lower case, separated by commas */
      const splitAlphabet = alphabet.toLowerCase().split("");

      /* create a variable that takes the message argument, 
      and returns it converted to lower case and separated 
      by commas */
      const message = input.toLowerCase().split("");

      /* use a for loop within a for loop to compare the characters 
        in the alphabet argument to check for uniqueness */
      for (let i = 0; i < splitAlphabet.length; i++) {
          for (let j = i + 1; j < splitAlphabet.length; j++) {

              if (splitAlphabet[i] === splitAlphabet[j]) return false;
          }
      }

      if (encode) return mapInput(message, abc, splitAlphabet).join("");
      return (mapInput, splitAlphabet, abc).join("");
}


return {
  substitution,
};
})();

module.exports = substitutionModule.substitution;