const element = (n) => {
    return document.getElementById(n)
};

let btn = element('btn');
let inp = element('text');
let result = element('result');

const palindrom = (i, r, s) => {

    let compare = s.value.toLowerCase() === s.value.toLowerCase().split('').reverse().join('');

    switch (compare) {
        case true :
            r.innerHTML = 'Слово "' + s.value + '" - полиндром';
            i.setAttribute("style", "background: yellowgreen;");
            break;

        case false :
            r.innerHTML = 'Слово "' + s.value + '" - не полиндром';
            i.setAttribute("style", "background: red;");
            break;
    }
};

btn.addEventListener("click", () => palindrom(inp, result, inp));
clrBtn.addEventListener("click", () => element('result').innerHTML = '');


//------------------first variant------------------

// const palindrom = (i, r, s) => {
//
//     str = s.value.toLowerCase();
//
//     let compare = str === str.value.toLowerCase().split('').reverse().join('');
//
//     switch (compare) {
//         case true :
//             r.innerHTML = 'Слово "' + str + '" - полиндром';
//             i.setAttribute("style", "background: yellowgreen;");
//             break;
//
//         case false :
//             r.innerHTML = 'Слово "' + str + '" - не полиндром';
//             i.setAttribute("style", "background: red;");
//             break;
//     }
// };
//
// btn.addEventListener("click", () => palindrom(inp, result, inp));


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




