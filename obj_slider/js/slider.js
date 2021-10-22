let Slider = function () {
    this.imageUrls = [];
    this.currentImage = 0;
    this.image = null;
    this.prev = null;
    this.next = null;
    this.indicators;

    this.init = function (el) {

        let viewContainer = document.getElementById(el);

        this.image = viewContainer.querySelector('.slideImage');
        this.prev = viewContainer.querySelector('.prev');
        this.next = viewContainer.querySelector('.next');
        this.indicators = viewContainer.querySelector('.indicators');

        // Context on init moment
        let that = this;
        this.prev.addEventListener("click", (e) => that.slidePrev(e));
        this.next.addEventListener("click", (e) => that.slideNext(e));

        // Set image srs to array
        this.imageUrls.push('https://static.kulturologia.ru/files/u18172/1817201340.jpg');
        this.imageUrls.push('https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg');
        this.imageUrls.push('https://5sfer.com/wp-content/uploads/2015/08/8ipwnn.jpg');
        this.imageUrls.push('https://jizn.info/wp-content/uploads/2020/08/1.jpg');

        // Set current image src attribute to <img> tag
        this.image.src = this.imageUrls[this.currentImage];

        let indicatorItems = []
        this.imageUrls.forEach(() => indicatorItems = [...indicatorItems, '<div></div>'])
        this.indicators.innerHTML = indicatorItems.join('');
        this.indicators.childNodes[0].classList.toggle('active');


        // Disable ability to click prev button
        this.prev.disabled = true;
        this.prev.setAttribute('class', 'disabled')
    };

    this.slidePrev = () => {
        this.currentImage--;

        // Set active indicator
        this.indicators.childNodes[this.currentImage + 1].classList.toggle('active');
        this.indicators.childNodes[this.currentImage].classList.toggle('active');

        // Change view image
        this.image.src = this.imageUrls[this.currentImage];
        this.next.disabled = false;
        this.next.removeAttribute('class')

        if (this.currentImage <= 0) {
            this.prev.disabled = true;
            this.prev.setAttribute('class', 'disabled')
        }
    };

    this.slideNext = () => {
        this.currentImage++;

        // Set active indicator
        this.indicators.childNodes[this.currentImage - 1].classList.toggle('active');
        this.indicators.childNodes[this.currentImage].classList.toggle('active');

        // Change view image
        this.image.src = this.imageUrls[this.currentImage];
        this.prev.disabled = false;
        this.prev.removeAttribute('class');

        if (this.currentImage >= this.imageUrls.length - 1) {
            this.next.disabled = true;
            this.next.setAttribute('class', 'disabled')
        }
    }
};