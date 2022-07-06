"use strict";


const OpenImage = (source) => {
    let new_image = document.createElement('div');
    new_image.classList.add('backgrounded_image');
    new_image.innerHTML = `
        <span class="remover">&times;</span>
        <img src="${source}" class="openedImage" />
    `
    document.body.appendChild(new_image);
    document.querySelector('.remover').addEventListener('click', () => {
        document.body.removeChild(new_image);
    });
}


const ImageSlider = () => {
    let images = ['/static/img/home-bg.png', '/static/img/home-bg-1.jpg', '/static/img/home-bg-2.jpg'];
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

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        removeClass();
    }
    else {
        addClass();
    }
});

function addClass() {
    let elements = document.querySelectorAll('.changed-line');
    console.log(elements)
    elements.forEach((elem) => {
        elem.classList.add('line-trough')
        elem.classList.remove('p-0')
    });
};

function removeClass() {
    let elements = document.querySelectorAll('.line-trough');
    console.log(elements)
    elements.forEach((elem) => {
        elem.classList.remove('line-trough')
        elem.classList.add('changed-line')
        elem.classList.add('p-0')
    });
};