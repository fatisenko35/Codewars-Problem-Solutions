// *********************** Problem Statement ***********************

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// ***********************  Solution  **************************

function duplicateEncode(word){
    var res = ""
    var word = word.toLowerCase();
    for(let i = 0; i < word.length; i++){
      var temp = word.substring(0, i) + word.substring(i + 1, word.length); 
      temp.includes(word[i]) ? res += ")" : res += "(" ;
    }
  return res
}