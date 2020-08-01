document.getElementById('slider_button-left').onclick = sliderLeft;
document.getElementById('slider_button-right').onclick = sliderRight;

let left = 0;

function sliderLeft() {
    var sliderBody = document.getElementById('slider-body');
    left = left - 200;
    if (left < -1400) {
        left = 0;
    }
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