//1

//2

function sumTriple (x, y) {
    if (x === y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));

//3

function WordMushies(new_str) {
    let flag;
    for (let i = new_str.length;; i++) {
      flag = true;
      for (var j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        for (var j = new_str.length; j < i; j++) {
          new_str += new_str[i - j - 1];
        }
        return new_str;
      }
    }
  }
  
  
  console.log(WordMushies("abcddc"))
  console.log(WordMushies("122"))