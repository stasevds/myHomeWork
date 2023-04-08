

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
        type: "radio",
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

let createForm = function () {
    let container = document.querySelector('#container');
    let form = document.createElement('form');
    form.id = 'form';
    container.append(form);
};

let addForm = function () {


    data.map(function (element) {

        let br = document.createElement('br');

        if ((element['type']) === 'input') {
            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.textContent = element['placeholder'];
            label.setAttribute('for', `${element['id']}`);

            form.append(input);
            form.append(label);
            form.append(br);

        } else if ((element['type']) === 'date') {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.textContent = element['placeholder'];
            label.setAttribute('for', `${element['id']}`);

            form.append(input);
            form.append(label);
            form.append(br);

        } else if ((element['type']) === 'radio') {

            let input = document.createElement('input');

            input.type = 'radio'
            input.value = element['value']

            element['options'].map(function (index) {

                let input = document.createElement('input');
                let label = document.createElement('label');

                input.name = element['id'];
                input.type = element['type'];

                label.id = element['options'][index];
                label.textContent = element['options'][index];

                form.append(input);
                form.append(label);
            })

            form.append(br);

        } else if ((element['type']) === 'checkbox') {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = element[`type`];
            input.id = element['id'];
            input.value = element['value'];

            label.setAttribute('for', `${element['id']}`);
            label.textContent = element['placeholder'];

            element['options'].map(function (item, index) {

                let input = document.createElement('input');
                let label = document.createElement('label');

                input.type = element[`type`];
                input.id = element['id'];
                input.value = element['value'];

                label.textContent = element['options'][index];

                form.append(input);
                form.append(label);
            });
        }

        form.append(br)

    });
};

