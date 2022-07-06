"use strict";
const ImageSlider = () => {
    let images = ['img/home-bg.png', 'img/home-bg-1.jpg', 'img/home-bg-2.jpg'];
    let imageIndex = 0;
    let header = document.querySelector('header');
    setInterval(() => {
        imageIndex += 1;
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
        header.style.backgroundImage = `url(${images[imageIndex]})`;
    }, 3000)

}

ImageSlider();


const initializeCounter = () => {
    let counter_element = document.querySelectorAll('[data-count]');
    let has_changed = false;
    window.onscroll = () => {
        if (window.scrollY > 800 && has_changed == false) {
            counter_element.forEach(e => {
                let count = 0;
                let last_count = parseInt(e.attributes['data-count'].nodeValue);
                let add_by = parseInt(last_count / 30);
                let countstart = setInterval(() => {
                    count += add_by;
                    e.innerText = count
                    if (count >= last_count) {
                        clearInterval(countstart);
                        e.innerHTML = last_count;
                        has_changed = true;
                    }
                }, 30);
            });
        }
    };

};

initializeCounter();