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

/*const elements = document.body.querySelectorAll(".test");
const first = elements[0].dataset.property;
elements.forEach((el,index, array)=>{
  console.log(el)
  const nextSibling = el.nextElementSibling;
  if(nextSibling) {
    el.dataset.property= nextSibling.dataset.property
  }
  else {el.dataset.property = array[0].dataset.property
}})*/

   
//const firstDivElement = document.querySelector(".test");
//firstDivElement.onclick = function(){
  //console.log(this.dataset.property)
//}

/*const divElements = document.querySelectorAll(".test");
divElements.forEach(el=> {
  el.addEventListener('click', function(){
    console.log(this.dataset.property)

    el.removeEventListener('click',function(){
      console.log(this.dataset.property)
    })
  },)
  
  
})

const divElements = document.querySelectorAll(".test");
const clickHandler = function(e){
 console.log (this);
 console.log (e)
}


divElements.forEach(el=> {
  el.addEventListener('click',clickHandler)
})

const root = document.querySelector('#parent');

root.addEventListener('click', (e)=>{
  const goalElement = e.target.closest('.test')
 //if(e.target !== e.currentTarget && e.target.tagName==='LI'){
 //console.log(e.target.dataset.property)
  if(goalElement && goalElement.style.background==='transparent'){
    goalElement.style.background=''
      //console.log(goalElement.dataset.property)
  } else if (goalElement){
    goalElement.style.background ='transparent'
    console.log('transparent')
  }
})*/

const root = document.querySelector('#parent'); 

const cleanStyles = ()=> root.querySelectorAll ('li[style]')
.forEach(element=>{
  element.style.background = ''
}) ;  


root.addEventListener('click', (e)=>{
  const goalElement = e.target.closest('.test')
 const randomColor ="#"+ Math.floor(Math.random()*);

  if(goalElement){
    goalElement.style.background = randomColor;
      
  } else {
  cleanStyles()
  }
})


