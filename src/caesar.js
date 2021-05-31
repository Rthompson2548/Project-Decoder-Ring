const caesarModule = (function() {
    function caesar(input, shift, encode = true) {
        // if shift meets any of these conditions, return false
        if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
        /* create a variable that takes the input value and converts it to lower case letters so that all characters have the correct ascii values */
        let word = input.toLowerCase().split("");
        /* I don't understand how using `0 - shift` will decode 
        the word? */
        if (!encode) shift = 0 - shift;
        // create a variable that maps each letter of the word
        const message = word.map((letter) => {
          
          /* create a variable in the callback function 
            that converts the letter to ascii code.
        I understand why we are using charCodeAt() and 
        why we should subtract 97 to get it's distance from 
        'a', but I don't understand why we are putting 0 as 
        the index. How is the code able to access the other 
        indexes (1+) of the string? */

            let asciiValue = letter.charCodeAt(0) - 97;

            /* Why are we returning a letter with a value that
            is not part of the alphabet? */
            if (asciiValue < 0 || asciiValue > 26) return letter;

            /* add the ascii code value of the letter to the 
            shift argument value to convert  it to the right 
            character */
            asciiValue += shift;

            /* if the character's value is less than the 'a' value, 
            add 26 to it so that it wraps around the alphabet.
            I understand that doing this would give it an alphabet 
            value, but what do we do if the letters value is
            greater than 26? */

            if (asciiValue < 0) asciiValue += 26;

            // I honestly just don't even know what this part means. 
            asciiValue = asciiValue % 26;

            /* why do we add the ascii value to 97, which is 'a', if 
            we already added it's ascii value to shift? Isn't that how 
            we encode the message? */

            asciiValue += 97;

            /* user String.fromCharCode to conert the ascii 
            code message back to letter values */
            return String.fromCharCode(asciiValue);
        });
      
        // join each new character together to create a full word
        return message.join("");
    }


    return {
        caesar,
    };
})();

module.exports = {
    caesar: caesarModule.caesar
};