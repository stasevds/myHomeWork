/*function sum(number){
  let result = number;

  function f(nextNumber){
    result += nextNumber;
    console.log(result);
    return f;
  }
    
  return f;
}
sum(1)(2)(3);


//Пример Дз№1

//Занятие №1

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

//Занятие №2 

//const firstDivElement = document.querySelector(".test");
//console.log(firstDivElement);
//firstDivElement.onclick = () => alert('Hello');
/*firstDivElement.onclick = function(){
  console.log('Hello');
}
firstDivElement.onclick = function(){
  console.log(this.dataset.property)
}*/

//const divElements = document.querySelectorAll(".test");
//console.log(divElements);
/*for(i=0; i<divElements.length; i++){
  divElements[i].onclick = function(){
    console.log(this.dataset.property);
  }
}*/

/*divElements.forEach(el => {
  el.onclick = function(){
    console.log(this.dataset.property)
  }
})


divElements.forEach( el => {
  el.addEventListener('click', function(){
    console.log(this.dataset.property)

    el.removeEventListener('click',function(){
      console.log(this.dataset.property)
    })
  },{
     once: true,    
  })

})

const divElements = document.querySelectorAll(".test");

const clickHandler = function(e){
  console.log(this.dataset.property);

  console.log (this);
  console.log (e)
  
  //this.removeEventListener('click',clickHandler)
}


divElements.forEach(el=> {
  el.addEventListener('click',clickHandler)
});*/

/*const root = document.querySelector('#parent');

/*root.addEventListener('click', (e)=>{
 // console.log(e.target.dataset.property);
  //console.log(e.target);
 //console.log(e.currentTarget);
})

root.addEventListener('click', (e)=>{
  const goalElement = e.target.closest('.test')

  //if(e.target !== e.currentTarget && e.target.tagName==='LI'){ 
  
  //if(e.target.tagName==='LI'){
  //console.log(e.target.dataset.property)
  
  //if(goalElement){
    //console.log(goalElement.dataset.property);
  //}


 if(goalElement && goalElement.style.background ==='transparent'){
    goalElement.style.background=''
      console.log(goalElement.dataset.property)
  } else if (goalElement){
    goalElement.style.background ='transparent'
    console.log('transparent')
  }

if(goalElement){
  goalElement.classList.toggle('transparent');
  //goalElement.style.background = 'transparent';
  console.log('transparent');
}
})*/

const root = document.querySelector('#parent'); 

const cleanStyles = ()=> root.querySelectorAll ('li[style]')
.forEach(element=>{
  element.style.background = ''
}) ;  


document.documentElement.addEventListener('click', (e)=>{
  const goalElement = e.target.closest('.test');
 const randomColor ="#"+ Math.floor(Math.random()*14642448).toString(16);

  if(goalElement){
    goalElement.style.background = randomColor;
      
  } else {
  cleanStyles()
 //goalElement.style.background = '';
  //console.log(e.currentTarget.querySelectorAll('li[style]')) 
  /*e.currentTarget.querySelectorAll('li[style]')
  .forEach(element => {
    element.style.background = '';
  });*/
}
})


