let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let numInput = document.querySelector('#number');
let nameInput = document.querySelector('#name');
let goalInput = document.querySelector('#goals');
let assistInput = document.querySelector('#assists');
let pointInput = document.querySelector('#points');

btnAdd.addEventListener('click', () => {
    let number = numInput.value;
    let name = nameInput.value;
    let goals = goalInput.value;
    let assists = assistInput.value;
    let points = pointInput.value;

    let template = `
                    <tr>
                        <td>${number}</td>
                        <td>${name}</td>
                        <td>${goals}</td>
                        <td>${assists}</td>
                        <td>${points}</td>
                    </tr>
                    `;
    table.insertRow().innerHTML = template;
});