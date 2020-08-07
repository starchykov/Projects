createNewSlider = () => {

    let newSlider = {

        imageUrls: [],
        currentImage: 0,

        image: null,
        prev: null,
        next: null,

        init: function (el) {

            let element = document.getElementById(el);

            this.image = element.querySelector('.slideImage');
            this.prev = element.querySelector('.prev');
            this.next = element.querySelector('.next');

            //context on init moment
            let that = this;
            this.prev.addEventListener("click", (e) => {
                that.slidePrev(e)
            });
            this.next.addEventListener("click", (e) => {
                that.slideNext(e)
            });
            this.imageUrls.push('https://avatars.mds.yandex.net/get-pdb/70729/d65811a6-1ad6-4c3b-80b1-2f4e4a9fdd52/s1200');
            this.imageUrls.push('https://avatars.mds.yandex.net/get-pdb/163339/f8cffa0c-e554-403c-9399-150592a6d96f/s1200');
            this.imageUrls.push('https://avatars.mds.yandex.net/get-pdb/750514/84cb3f69-5a02-445e-bc31-5efc67e63df1/s1200');
            this.imageUrls.push('https://avatars.mds.yandex.net/get-pdb/51720/d2d3fd99-5446-47d5-99cb-131f36f83494/s1200');
            this.image.src = this.imageUrls[this.currentImage];
            this.prev.disabled = true;
            this.prev.setAttribute('class', 'disabled')
        },
        slidePrev: function () {
            this.currentImage--;
            if (this.currentImage < 0) {
                this.prev.disabled = true;
                this.prev.setAttribute('class', 'disabled')
            } else {
                this.image.src = this.imageUrls[this.currentImage];
                this.next.disabled = false;
                this.next.removeAttribute('class')
            }
        },
        slideNext: function () {
            this.currentImage++;
            if (this.currentImage >= this.imageUrls.length) {
                this.next.disabled = true;
                this.next.setAttribute('class', 'disabled')
            } else {
                this.image.src = this.imageUrls[this.currentImage];
                this.prev.disabled = false;
                this.prev.removeAttribute('class');
            }
        }
    };

    return newSlider;
};