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
 },1000)  */
 
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
