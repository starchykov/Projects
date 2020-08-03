let btn = document.getElementById('btn');
let inp = document.getElementById('text');
let result = document.getElementById('result');


const palindrom = (i, r, s) => {

    str = s.value.toLowerCase();

    let compare = str === str.split('').reverse().join('');

    switch (compare) {
        case true :
            r.innerHTML = 'Слово "' + str + '" - полиндром';
            i.setAttribute("style", "background: yellowgreen;");
            break;

        case false :
            r.innerHTML = 'Слово "' + str + '" - не полиндром';
            i.setAttribute("style", "background: red;");
            break;
    }
};

btn.addEventListener("click", () => palindrom(inp, result, inp));


//------------------second variant------------------

// const palindrom = (i, r, s) => {
//
//     str = s.value.toLowerCase();
//
//     if (str === str.split('').reverse().join('')) {
//         r.innerHTML = 'Слово "' + str + '" - полиндром';
//         i.setAttribute("style", "background: yellowgreen;")
//     } else {
//         r.innerHTML = 'Слово "' + str + '" - не полиндром';
//         i.setAttribute("style", "background: red;")
//     }
// };
//
// btn.addEventListener("click", () => palindrom(inp, result, inp));


//------------------third variant------------------

// btn.onclick = palindrom = () => {
//
//     str = document.getElementById('text').value.toLowerCase();
//
//     if (str === str.split('').reverse().join('')) {
//         result.innerHTML = 'Да';
//         inp.setAttribute("style", "background: yellowgreen;")
//     } else {
//         result.innerHTML = 'Нет';
//         inp.setAttribute("style", "background: red;")
//     }
// };


// const palindrom = (str) => {
//     return str === str.split('').reverse().join('');
// };
//
// console.log(palindrom('abba'));




