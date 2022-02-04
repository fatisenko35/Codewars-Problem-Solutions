// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//           *******Solution************

function rot13(message){
    let res = "";
    for(let i = 0; i < message.length; i++){
      var x = message.charCodeAt(i); 
      if ((x > 64 && x < 91) || (x >96 && x < 123)){ // Uppercase letters ascii number between [65-90], lowercase between [97-122]
        if(message[i].toLowerCase() > "m"){
        res += String.fromCharCode(x-13)
      }else{
        res += String.fromCharCode(x+13)
      }
      }else{
        res += message[i]
      }
    }
    return res;
  }