function titleCase(str) {

  let lower = str.toLowerCase();
  let words = lower.split(" ");

  for (let i = 0; i < words.length; i++) {

    let w = words[i];
    
    let first = w.charAt(0).toUpperCase();
    let rest = w.slice(1);

    words[i] = first + rest;
  }
  return words.join(" ");
}

console.log(titleCase("I like to code")); 
console.log(titleCase("javaScript is fun"));
console.log(titleCase("sHoRt AnD sToUt"));
