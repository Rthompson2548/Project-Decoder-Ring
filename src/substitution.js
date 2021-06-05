// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
/* create a helper funtion for message and both alphabet strings */
    function mapInput(message, alphabetA, alphabetB) {

        /* use the map method on the input message */
        return message.map((letter) => {
            const index = alphabetA.indexOf(letter);

            /* create an if statement that returns any characters that
             were not found in the string */          
            if (index === -1) return letter;
            return alphabetB[index];
        });
    }
  
  function substitution(input, alphabet, encode = true) {
        if (!alphabet || alphabet.length != 26) return false;

        /* create a variable that takes the correct alphabet
        string and returns an array of the letters, separated by a comma */
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
        return mapInput(message, splitAlphabet, abc).join("");
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

 