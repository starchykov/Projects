//получаем кнопки
document.getElementById('slider_button-left').onclick = sliderLeft;
document.getElementById('slider_button-right').onclick = sliderRight;

//хардкодим значение лефт
let left = 0;

//функция листать влево
function sliderLeft() {
    //получаем полосу слайдера
    var sliderBody = document.getElementById('slider-body');

    //задаем значение переменной
    left = left - 200;

    //проврка если слайдер в конце
    if (left < -1400) {
        left = 0;
    }

    //прокрутка слайда
    sliderBody.style.left = left + 'px';
}

function sliderRight() {
    var sliderBody = document.getElementById('slider-body');
    left = left + 200;
    if (left > 0) {
        left = -1400;
    }
    sliderBody.style.left = left + 'px';
}