// // // Please refrain from tampering with the setup code provided here,
// // // as the index.html and test files rely on this setup to work properly.
// // // Only add code (e.g., helper methods, variables, etc.) within the scope
// // // of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope
    function polybius(input, encode = true) {
        /* create a variable that takes the input message, converts it all to lowercase, and use split to return an array of each letter separated by a single comma */
        const split = input.toLowerCase().split("");
        /* create an array of every letter(s) in the polybius square. This array will be separated into multiple inner arrays of letters within the array according to their row */
        const polybiusSquare = [
            ["a", "b", "c", "d", "e"],
            ["f", "g", "h", "(i/j)", "k"],
            ["l", "m", "n", "o", "p"],
            ["q", "r", "s", "t", "u"],
            ["v", "w", "x", "y", "z"],
        ];
        // create an if statement for what to do if the inputted message should be encoded
        if (encode) {
            // create a variable that uses map method on the lowercase message 
            const codedMessage = split.map((letter) => {
                /* create a variable that takes each character from the inputted message array and converts it into it's unicode value. */
                const asciiLetterValue = letter.charCodeAt(0);
                /* use an if statement to return only characters between 
        lowercase 'a' and 'z' ascii values, as well as checking that 
          the character is not a space  */
                if ((asciiLetterValue < 97 || asciiLetterValue > 122) && asciiLetterValue != 32) return;
                // run a for loop through the polybius square array.  
                for (let i = 0; i < polybiusSquare.length; i++) {
                    // run a for loop within that for loop through each inner array
                    for (let j = 0; j < polybiusSquare[i].length; j++) {
                        if (polybiusSquare[i][j] === letter) return `${j + 1}${i + 1}`;
                        if (letter === "i" || letter === "j") return "42";
                        if (letter === " ") return " ";
                    }
                }
            });
            // return the variable that split and lower case'd the original message argument
            return codedMessage.join("");
        }

        //decode

        /* set a variable as an empty string to hold decoded message */
        let codedMessage = "";
        /* run a for loop through the message array, but increment i by 2, because each encoded character amounts to 2 number values */
        for (let i = 0; i < split.length; i += 2) {
            /* create an if statement that checks if the value in the message is a space */
            if (split[i] === " ") {
                /* if the value is true, then add a space string to the decoded message string */
                codedMessage += " ";
                /* switch incrementor to go back one "a" value in order to not include the next number in the string */
                i--;
                /* run a continue statement, which will terminate the i-1 incrementor and return back to a+=2 for the next numbers in the string*/
                continue;
            }
            if (!split[i + 1]) return false; // invalid number of characters
            codedMessage += polybiusSquare[split[i + 1] - 1][split[i] - 1];
        }
        // return the coded message

        return codedMessage;
    }

    return {
        polybius,
    };
})();

module.exports = {
    polybius: polybiusModule.polybius
};