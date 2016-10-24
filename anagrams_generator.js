/**
 * This recursive algorithm finds all the anagrams from its parameter.
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
 *  NB : The current anagram (id est : the one which is being constructed) is constructed little by little thanks to N°2
 *  (as it's passed as a function's argument).
 *  Each time the current anagram has the same size than the beginning array, the called function returns.
 */

/**
 * Destined to be called by the final-user, giving the parameter used to construct its anagrams
 * @param beginning_array
 * @returns {generateAnagrams}
 */
function generateAnagrams(beginning_array) {
    beginning_array = beginning_array.split("");
    var all_found_anagrams = [];
    var array_are_fixed_chars = []; // Indicates which element is fixed (or not) ; TRUE <-> fixed ; FALSE <-> unfixed
    beginning_array.forEach(() => array_are_fixed_chars.push(false));

    this.display = function() {
        console.log("Rendering the results - it may take time.");
        console.log("Found anagrams : " + all_found_anagrams);
        console.log("%cThis program has found " + all_found_anagrams.length + " anagrams from the string \"" + beginning_array + "\"", "color : green; font-weight : bold;");
        console.log("%cNB : indeed, " + beginning_array.length + "! equals " + all_found_anagrams.length, "color : green;");
    };

    /**
     * The core of this program. It's the recursive algorithm, which finds all the anagrams of an array
     * @param beginning_array
     * @param array_are_fixed_chars
     * @param in_construction_anagram the current anagram (id est : the one which is being constructed)
     */
    function recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, in_construction_anagram) {
        if (in_construction_anagram.length == beginning_array.length) { // An anagram is found, we store it
            return all_found_anagrams.push(in_construction_anagram);
        }

        beginning_array.forEach((char, index) => {
            if (!array_are_fixed_chars[index]) {
                array_are_fixed_chars[index] = true;
                recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, in_construction_anagram + char);
                array_are_fixed_chars[index] = false;
            }
        });
    }

    console.log("Calculating the anagrams of \"" + beginning_array + "\" - it may take time. A confirmation message will appear when this calculation will be done.");
    recursiveGenerateAnagrams(beginning_array, array_are_fixed_chars, ""); // The first call
    console.log("This is the confirmation message. Calculation is done : the anagrams are calculated.");
    return this;
}