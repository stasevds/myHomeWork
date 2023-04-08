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
alert(sum(1)(2)(3))



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
}})*/

// занятие 4.03.23

/*const elements = document.querySelectorAll('*');
elements.forEach(element => {
  element.addEventListener('click',(e)=> {
    console.log(`Погружение` , e.currentTarget);
  }, true)
  element.addEventListener('click',(e)=> {
    console.log(`Всплытие`, e.currentTarget);
  })
})*/

/*const root = document.querySelector('#parent');
const body = document.body;

root.addEventListener('click', (e)=>{
  console.log(e);
  //alert('hello')
})

body.addEventListener('click',(e)=>{
  console.log(e);
  root.dispatchEvent(customClick);
  })

  const customClick = new MouseEvent('click',{
    clientX:100,
    clienty:200,
  });*/

  //задача, в которой при клике по области, определяем в 
  //какой области находимся 

/*const body = document.body;
body.addEventListener('click',(e)=>{
const x = e.clientX;
const y = e.clientY;
const height = e.target.offsetHeight;
const width = e.target.offsetWidth;

if(x <= width/2 && y <= height/2) console.log(1);
else if( x > width/2 && y <= height/2) console.log(2);
else if( x <= width/2 && y > height/2) console.log(3);
else if( x > width/2 && y > height/2) console.log(4);
})

setTimeout(()=>{
  console.log(1);
  //console.log('hello')
}, 4000,)

setTimeout(()=>{
  console.log(2);
  }, 1000)
  
 const id = setTimeout(()=>{
  console.log('cb');
  }, 1000)
  //clearTimeout(id) 
  console.log(id)

  
  //setInterval(()=>{
    //console.log('tick')
  //},1000)

  let count = 0;
 
 const id= setInterval(()=>{
  if(count>9){
    clearInterval(id)
  }
  ++count;
  console.log('tick');
 },1000) 
 
//setTimeout(console.log, 1000, 1)

let count = 0;
let timeout = 200;
const id = setTimeout(function request(){
  if(count<5){
    count++;
    console.log(count)
    timeout*=2;
    setTimeout(request,timeout)
  }
  else clearTimeout(id)
}, timeout) 

// КУСОЧЕК ДОМАШНЕЙ РАБОТЫ

const array = [
  {
    id:"age",
    type:'checkbox',
    value: 1,
    options: [1,2,3,4]
  }
]

const form = document.querySelector('#form');
array.forEach(el=>{
  if(Array.isArray(el.options)){
    el.options.forEach(options=>{
      const checkboxElement = document.createElement("input");
      checkboxElement.type = 'checkbox';
      checkboxElement.id = 'options';
      checkboxElement.name = el.id;
      checkboxElement.value = 'options';
      form.append(checkboxElement) 
    })
  }
})
// КОНЕЦ

setTimeout(()=> console.log(2), 100)

console.time('test')
for(let i = 0; i<1000000; i++){
  const div = document.createElement('div');
  document.body.append(div);

}
console.timeEnd('test')*/

//ПРИМЕР
 
/*const div = document.querySelector('#div');

div.addEventListener("mouseover", (e)=>{

  const width = e.target.offsetWidth;

  e.target.style.width= `${e.target.offsetWidth}px`
  
  const id = setInterval(()=>{
    
    if(width>50){
      console.log(e.target.style)
    e.target.style.width = `${parseInt(width)}px`
  } else clearInterval(id)
  },100)
  console.log(width)
})*/

//ПРИМЕР С ОПРЕДЕЛЕНИЕМ ОШИБКИ

/*const user = {
  name: 'Alex',
  age: 29,
}
const data = [];


  try{
    if(!data.length) throw new Error ('empty data')
    data.forEach(element => {
      console.log(element)
    });
  } catch(e){
    if(e.massage ==="empty data")console.log(e)
    else throw e
    //form.innerText
  }
  
}


//const data =[];
//data.forEach(element => {
  //console.log(element)
//})

//user.forEach(element => {
  //console.log(element)
//})*/

/*class MyError extends Error{
  constructor(message){
    super(message)
    this.name = 'MyError'
  }
}

throw new MyError('my error')
try{

} catch(e){
if(e.name === 'MyError')
else
}*/

//ЗАДАЧКИ
//1. нет длинны массива;
//2. вместо массива undefined;
//3. нет элемента формы на странице;

const noDataErrorMassage= 'invalid data'
const emptyDataErrorMassage= 'empty data'
const noformElementMassage= 'form element does exist'

try{ 
  const data =[];
  const form = document.querySelector('#form');
  let formElements;
  try{
    try{
     if(!data.length) throw new Error(emptyDataErrorMassage) 
     formElements = data.map((el)=> el)
    } catch(e){
     if(e.massage === emptyDataErrorMassage) console.log(e)
     else throw e
    }
  } catch(e){  
    if(form) form.append(...formElements)
    else throw new Error (noformElementMassage)
  }   
} catch (e){
if(e.massage ===noformElementMassage) console.log(e)
}
