let url = 'https://jsonplaceholder.typicode.com/users';
let promise = fetch(url);

let obj1 = {
    name: 'Mario',
    lastname: 'Rossi',
    age: 26
}

/* function Animal(name, type, age) {
    this.name = name,
    this.type = type,
    this.age = age
} */

class Animal {
    constructor(name, type, age) {
        this.name = name,
        this.type = type,
        this.age = age
    }
}


let d = new Animal('Bobby', 'Dog', 2);
let b = new Animal('Rex', 'Dog', 3);
let c = new Animal('Ettore', 'Cat', 5);

/* console.log(d.name)
console.log(b.name)
console.log(c.name) */


document.addEventListener('DOMContentLoaded', function() {
    let p = document.createElement('p');
    /* p.innerText = "Ciao a tutti!"; */
    p.innerHTML = "Ciao a <strong>tutti</strong>!";
    console.log(p)
    
    let div = document.querySelector('body div:first-child')
    div.appendChild(p)
    console.log(div)

    promise.then(response => response.json()).then(data => createList(data))
})






// Chiamata ajax tramite XMLHttpRequest
/* let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let users = JSON.parse(xhr.responseText)
        createList(users);
    }
} */

// Promise -> pending | resolved | rejected

let UserDATA = [];
fetch(url).then(response => response.json()).then(data => UserDATA = data)
console.log(UserDATA);

 let test = async () => {
    let t = await fetch(url);
    let data = t.json();
    console.log(data)
}

test();






function createList(users) {
    let content = document.querySelector('div.content');
    let ul = document.createElement('ul');

    users.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element.name;
        ul.appendChild(li)
    });

    content.appendChild(ul);
}



let o = { name: 'John', lastname: 'Smith', age: 41 }

/* let nome = o.name;
let cognome = o.lastname;
let anni = o.age; */

let { name, lastname, age } = o;
console.log(age)


let arr = ['ciao', 'abc']
/* let x = arr[0];
let y = arr[1];
let z = arr[2]; */

let [ x , y ] = arr;


function func() {
    return 'Sono la funzione func';
}

let testFunc = func;

console.log(testFunc());



let bool = true;
let num = 8;

0 => false
1,2,3,... => true

'' => false
'sdkg' => true

null => false
{jd} => true

undefined => false

let t = '10.5';

let vb = Boolean(num);
let v = !!num;
let nn = Number(t); // 10
let nf = parseFloat(t); //10.5
let ni = parseInt(t); //10
let n = +t; // 10


if(num) {
    console.log('Sono dentro IF')
} else {
    console.log('Sono dentro ELSE')
}