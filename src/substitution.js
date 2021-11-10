const substitutionModule = (function () {
/* helper function for message and both alphabet strings */
    function mapInput(message, alphabetA, alphabetB) {

        /* use the map method on the input message */
        return message.map((letter) => {
            const index = alphabetA.indexOf(letter);
            /* if statement that returns any characters that
             were not found in the string */          
            if (index === -1) return letter;
            return alphabetB[index];
        });
    }
  
  function substitution(input, alphabet, encode = true) {
        if (!alphabet || alphabet.length != 26) return false;

        /* variable that takes the correct alphabet
        string and returns an array of the letters, separated by a comma */
        const abc = "abcdefghijklmnopqrstuvwxyz".split("");

        /* variable that takes the alphabet argument and 
        returns it in lower case, separated by commas */
        const splitAlphabet = alphabet.toLowerCase().split("");

        /* variable that takes the message argument, 
        and returns it converted to lower case and separated 
        by commas */
        const message = input.toLowerCase().split("");

        /* use a nested for loop to compare the characters 
          in the alphabet argument to check for uniqueness */
        for (let i = 0; i < splitAlphabet.length; i++) {
            for (let j = i + 1; j < splitAlphabet.length; j++) {
                if (splitAlphabet[i] === splitAlphabet[j]) return false;
            }
        }

        if (encode) return mapInput(message, abc, splitAlphabet).join("");
        return mapInput(message, splitAlphabet, abc).join("");
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

 