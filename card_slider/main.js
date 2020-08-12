let minImg = document.querySelectorAll('.img-min');
let maxImg = document.getElementsByClassName('img-max');

for (i = 0; i < minImg.length; i++) {
    minImg[i].setAttribute('class', 'img-min');
    minImg[i].addEventListener('click', (element) => {
        newSrc = element.target;
        setMax(newSrc);
    });
    minImg[0].classList = 'active';
}

setMax = (newSrc) => {
    for (i = 0; i < minImg.length; i++) {
        minImg[i].setAttribute('class', 'img-min');
    }
    if (newSrc.className === 'img-min') {
        maxImg[0].src = newSrc.src;
        newSrc.setAttribute('class', 'active')
    }
};
