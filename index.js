/*function sum(number){
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
alert(sum(1)(2)(3))*/


let array = [];
let rainbow_div = document.querySelector(".rainbow");
for(let i=0; i<rainbow_div.children.length;i++){
  //console.log(rainbow_div.children[i])
  rainbow_div.children[i].style.background = rainbow_div.children[i].className;
  array.push(rainbow_div.children[i]);
  
}
//console.log(rainbow_div)
for(let i = array.length-1; i>0; i--){
  array[i-1].appendChild(array[i]);
}