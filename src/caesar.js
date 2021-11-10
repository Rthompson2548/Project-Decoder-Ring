const caesarModule = (function() {
    function caesar(input, shift, encode = true) {
        if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
        /* create a variable that takes the input value and converts it to lower case letters so that all characters have the correct ascii values */
        let word = input.toLowerCase().split("");
        if (!encode) shift = 0 - shift;
        // create a variable that maps each letter of the word
        const message = word.map((letter) => {
            let asciiValue = letter.charCodeAt(0) - 97;
            if (asciiValue < 0 || asciiValue > 26) return letter;

            /* add the ascii code value of the letter to the 
            shift argument value to convert  it to the right 
            character */
            asciiValue += shift;

            /* if the character's value is less than the 'a' value, 
            add 26 to it so that it wraps around the alphabet. */
            if (asciiValue < 0) asciiValue += 26;
            asciiValue = asciiValue % 26;

            /* why do we add the ascii value to 97, which is 'a', if 
            we already added it's ascii value to shift? Isn't that how 
            we encode the message? */

            asciiValue += 97;

            /* user String.fromCharCode to connect the ascii 
            code message back to letter values */
            return String.fromCharCode(asciiValue);
        });
      
        /* join each new character together to create a full word */
        return message.join("");
    }


    return {
        caesar,
    };
})();

module.exports = {
    caesar: caesarModule.caesar
};