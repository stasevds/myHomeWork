

// Перед вами массив данных, вы должны создать форму на странице а затем поместить в нее элементы созданные 
//на основе этого массива данных,

// поле type определяет тип создаваемого элемента, value его текущее значение, options доступные варианты,
// placeholder это атрибут лейб, id это ваш id, так же name, при помощи id мы связываем placeholder и элемент,

// после создания формы мы создаем кнопку submit при надатии на которую мы должны пройтись по всем элементам
// и создать на их основе массив [{id: id, value: новое значение}] и просто вывести его


 /* document.body.insertAdjacentHTML("afterbegin", `<form id="form">
    <label for="name">Name:</label>
    <input type="text" value=" " placeholder="name" id="name"><br><br>
    <label for="surname">Surname:</label>
    <input type="text" value=" " placeholder="surname" id="surname"><br><br>
    <label for="birthday">Date of Birth:</label>
    <input type="date" value="" placeholder="date of birth" id="birthday"><br><br>
    <input type="radio" name="state" id="sex" value="man">
    <label for="sex">Man</label>
    <input type="radio" name="state" id="sex" value="woman">
    <label for="sex">Woman</label><br><br>
    <input type="radio" name="time" id="time" value="9-10 AM">
    <label for="time">9-10 AM</label>
    <input type="radio" name="time" id="time" value="11-12 AM">
    <label for="time">11-12 AM</label>
    <input type="radio" name="time" id="time" value="1-2 PM">
    <label for="time">1-2 PM</label>
    <input type="radio" name="time" id="time" value="3-4 PM">
    <label for="time">3-4 PM</label>
    <input type="radio" name="time" id="time" value="5-6 PM">
    <label for="time">5-6 PM</label>
    <br><br>
    <input type="submit" name="submit" value="ready">
    </form>`);



  document.getElementById('form').addEventListener("submit", checkForm);

  function checkForm(event){
    event.preventDefault();
    let el = document.getElementById('form');

    let name = el.name.value;
    let surname = el.surname.value;
    let birthday = el.birthday.value;
    let state = el.state.value;
    let time = el.time.value;
    console.log(`${name}-${surname}-${birthday}-${state}-${time}.`);
    
    let arr =[];
    arr.push(name);
    arr.push(surname);
    arr.push(birthday);
    arr.push(state);
    arr.push(time);
    console.log(arr);
  }*/

  const data = [
    {
        type: "input",
        id: "name",
        value: "",
        placeholder: "name",
    },
    {
        type: "input",
        id: "surname",
        value: "",
        placeholder: "surname",
    },
    {
        type: "date",
        id: "birthday",
        value: "",
        placeholder: "date of birth",
    },
    {
        type: "toggle",
        id: "sex",
        value: "man",
        options: ["man", "woman"],
        placeholder: "sex",
    },
    {
        type: "checkbox",
        id: "time",
        value: "",
        options: ["9-10 AM", "11-12 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
        placeholder: "select timeslot for assessment",
    },
];

const form = document.createElement('form');
form.id = "form";
document.body.append(form);

data.forEach(el=>{
    if(el.type ==="input"){
        const label = document.createElement('label');
        const inputElement = document.createElement('input');
        const br = document.createElement('br');

        inputElement.placeholder = el.placeholder;
        inputElement.id = el.id;
        inputElement.value = el.value;

        label.setAttribute('for', el.id)
		label.innerText = el.id

		form.append(label);
		form.append(inputElement);
        form.append(br)
    }
    if(el.type ==="date"){
        const label = document.createElement('label');
        const inputElement = document.createElement('input');
        const br = document.createElement('br');

        inputElement.type = el.type;
        inputElement.placeholder = el.placeholder;
        inputElement.id = el.id;
        inputElement.value = el.value;
        
        label.setAttribute('for', el.id)
		label.innerText = el.id

		form.append(label);
		form.append(inputElement);
        form.append(br)
    }
    if(el.type === 'toggle'){
        el.options.forEach(option=>{
           const label = document.createElement('label');
           const title = document.createElement('span');
           const checkboxElement = document.createElement('input');
           
           checkboxElement.type = 'radio';
           checkboxElement.id = option;
           checkboxElement.name = el.id;
           checkboxElement.value = option;
           
           title.innerText = option;
   
           label.append(title)
           label.append(checkboxElement)
           form.append(label)
         })
     const br = document.createElement('br');    
     form.append(br)
    }
    if(el.type === 'checkbox'){
        el.options.forEach(option=>{
           const label = document.createElement('label');
           const title = document.createElement('span');
           const checkboxElement = document.createElement('input');
           
           checkboxElement.type = 'checkbox';
           checkboxElement.id = el.id;
           checkboxElement.name = option;
           checkboxElement.value = option;
           
           title.innerText = option;
   
           label.append(title)
           label.append(checkboxElement)
           form.append(label)
         })
     const br = document.createElement('br');    
     form.append(br)
    }
})

const button = document.createElement('button');
button.type = 'submit';
button.innerText = 'submit';

form.append(button);

const inputElementsArray = document.getElementsByTagName('input')

form.onsubmit =(event) => {
	event.preventDefault();
};

button.addEventListener("click", () => {
	const array = []
	data.forEach((elem) => {
		const obj = {};
		if (elem.id === "name") {

			obj.id = elem.id;
			obj.value = inputElementsArray[0].value

			array.push(obj)
		}
		if (elem.id === "surname") {

			obj.id = elem.id;
			obj.value = inputElementsArray[1].value

			array.push(obj)
		}
		if (elem.id === "birthday") {

			obj.id = elem.id;
			obj.value = inputElementsArray[2].value

			array.push(obj)
		}
		if (elem.id === "sex") {

			const radioButton = document.getElementsByName('sex')

			obj.id = elem.id;

			radioButton.forEach((elem) => {

				if (elem.checked === true) {
					obj.value = elem.value
				}

			})

			array.push(obj)
		}
		if (elem.id === "time") {
			const checkbox = document.querySelectorAll('[type="checkbox"]');

			obj.id = elem.id;

			checkbox.forEach((elem) => {

				if (elem.checked === true) {
					obj.value = elem.name;
				}

			});

			array.push(obj);
		}
	})
	console.log(array);
})

