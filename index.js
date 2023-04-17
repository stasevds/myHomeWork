/*
const array =[1,2,3,4,5];
const template = document.querySelector('#template');
const container = document.createElement('ul');

array.forEach(el=>{
  const element = template.content.cloneNode(true);
  element.querySelector('#span').textContent = el;
  container.append(element)
})

document.body.append(container);*/

const makeRequestNew = (method, url) => fetch(url,{
  method
})

const template = document.querySelector('#template');
const ulToDo = document.createElement('ul');

makeRequestNew('GET','https://jsonplaceholder.typicode.com/todos/')
.then(data =>{
  return data.json()
})
.then(data => {
  data.forEach(el => {
    const element = template.content.cloneNode(true);
    element.querySelector('#span').textContent = el.title;
    ulToDo.append(element)
  });

  document.body.append(ulToDo); 
    
})

