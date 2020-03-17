module.exports = function toReadable (n) {
    let arr = [];
    let res = "";
    let obj = {
    0:"zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty",
    30:"thirty",	
    40:"forty",
    50:"fifty",
    60:"sixty",
    70:"seventy",
    80:"eighty",
    90:"ninety",
    };
    
    if (n === 0) {return "zero"};

    if (n/100 >= 1) {
    res = res + obj[Math.floor(n/100)] + " hundred";
    arr.push(res);
    n = n % 100;
    } 
    
    if (n >= 20){
        res = obj[n - n%10];
      arr.push(res);
      if (n%10 != 0) {
      res = obj[n%10];
      arr.push(res);
      }
      n = n%10;
    } 
    else if ( n < 20 && n > 0){
      res = obj[n];
      arr.push(res);
    }
    
    res = arr.join(' ');
    return res;
}


