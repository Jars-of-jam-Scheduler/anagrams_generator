/**
 * This recursive function finds all the anagrams from its first parameter.
 * Its working is described below.
 *
 * The algorithm goes through a beginning array.
 * Each time a fixed letter is read, nothing happens.
 * Each time an unfixed letter is read :
 *  0. BEGINNING ;
 *  1. The algorithm sets it "fixed" ;
 *  2. Recursive call : a new algorithm's execution is launched (taking account of N°1) ;
 *  3. The algorithm sets it "unfixed" ;
 *  4. END ;
 *  The current anagram (id est : the one which is being constructed) is constructed little by little thanks to N°2
 *  (as it's passed as a function's argument).
 */

var all_found_anagrams = [];

const BEGINNING_ARRAY_SIZE = 3;
var beginning_array = [];

var array_are_fixed_chars = []; // Indicates which element is fixed (or not) ; TRUE <-> fixed ; FALSE <-> unfixed

/**
 * Utility function
 */
function fillArrays() {
    for(var i = 0; i < BEGINNING_ARRAY_SIZE; i++) {
        beginning_array.push(i);
        array_are_fixed_chars.push(false);
    }
}
fillArrays();

function displayResult() {
    console.log("This program has found " + all_found_anagrams.length + " anagrams from the string \"" + beginning_array + "\"");
    console.log("NB : indeed, " + BEGINNING_ARRAY_SIZE + "! equals " + all_found_anagrams.length);
    console.log("Found anagrams : " + all_found_anagrams);
}

/**
 * The core of this program. It's the recursive algorithm, which finds all the anagrams of an array
 * @param beginning_array
 * @param array_are_fixed_chars
 * @param in_construction_anagram the current anagram (id est : the one which is being constructed)
 */
function recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, in_construction_anagram) {
    if(in_construction_anagram.length == beginning_array.length) { // An anagram is found, we store it
        return all_found_anagrams.push(in_construction_anagram);
    }

    beginning_array.forEach(function(char) {
        if(!array_are_fixed_chars[beginning_array.indexOf(char)]) {
            array_are_fixed_chars[beginning_array.indexOf(char)] = true;
            recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, in_construction_anagram + char);
            array_are_fixed_chars[beginning_array.indexOf(char)] = false;
        }
    });
}
recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, "");
displayResult();