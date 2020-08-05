const button = (id) => {
    return document.getElementById(id)
};

let buttons = document.getElementsByClassName("button");
let answer = button('answer');
let firstNum = button('firstNum');
let secondNum = button('secondNum');

for (let i = 0; i < buttons.length; i++) {
    let clickedButton = buttons[i];
    clickedButton.addEventListener('click', () => operation(firstNum, secondNum, clickedButton));
}

const operation = (f, s, o) => {
    switch (o.innerHTML) {
        case '+':
            answer.innerHTML = Number(f.value) + Number(s.value);
            break;
        case '-':
            answer.innerHTML = Number(f.value) - Number(s.value);
            break;
        case '*':
            answer.innerHTML = Number(f.value) * Number(s.value);
            break;
        case '/':
            answer.innerHTML = Number(f.value) / Number(s.value);
            break;
    }
};


