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



//const testElement = document.querySelector('#test')
//const testElement = document.getElementsByClassName('test');
//const testElement2 = document.getElementById('#test')

//const third = document.body.querySelector("[data-property='3']")
//testElement2.dataset.property = '22';

//console.log(third);
//console.log(document.body.children)
//console.log(document.body.style.background ='yellow')
//console.log(testElement.dataset.property)
//console.log(testElement2)

//console.log(document.body.querySelectorAll('.test').children);

const elements = document.body.querySelectorAll(".test");
const first = elements[0].dataset.property;
elements.forEach((el,index, array)=>{
  console.log(el)
  const nextSibling = el.nextElementSibling;
  if(nextSibling) {
    el.dataset.property= nextSibling.dataset.property
  }
  else {el.dataset.property = array[0].dataset.property
}})

   

