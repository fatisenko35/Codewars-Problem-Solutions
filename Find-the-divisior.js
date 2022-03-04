//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all
//of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the 
//number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell 
//and Result<Vec<u32>, String> in Rust).


function divisors(num) {
  let array_ = [];
  let c = 0;
  for (let i = 2; i < num;i++){
    if(num % i == 0){
      array_.push(i);
      c++;
    }
  }
  return c == 0 ?`${num} is prime` : array_;
};
