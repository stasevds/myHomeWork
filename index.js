/*const list = document.getElementById('list');
function addToDo(toDo){
 const text = `<li class = "item">
                 <i class = "add" job="complete"></i>
                 <p class= "text">${toDo}</p>
                 <i class = "close" job="delete"></i>  
              </li>`
  
  const position = "beforeend"            
  list.insertAdjacentHTML(position, text);
}

addToDo('drink beer');
addToDo('eat salad');*/

const array =[1,2,3,4,5];
const template = document.querySelector('#template');
const container = document.createElement('ul');

array.forEach(el=>{
  const element = template.content.cloneNode(true);
  element.querySelector('#span').textContent = el;
  container.append(element)
})

document.body.append(container);