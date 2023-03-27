function sum(number){
  let result = number;

  function f(nextNumber){
    result += nextNumber;
    //console.log(result);
    return f;
  }
  f.toString = function() {
    console.log(result);
    return result;
  };
  
  return f;
}
console.log(sum(1)(2)(3));
//alert(sum(1)(2)(3))