let btn = document.getElementById('btn');
let inp = document.getElementById('text');
let result = document.getElementById('result');


btn.onclick = palindrom = () => {
    let str = document.getElementById('text').value.toLowerCase();

    if (str === str.split('').reverse().join('')) {
        result.innerHTML = 'Да';
        inp.setAttribute("style", "background: yellowgreen;")
    } else {
        result.innerHTML = 'Нет';
        inp.setAttribute("style", "background: red;")
    }
};


// const palindrom = (str) => {
//     return str === str.split('').reverse().join('');
// };
//
// console.log(palindrom('abba'));




