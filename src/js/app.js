import * as flsFunctions from "./modules/test-webp.js";

//===================================================================================
// check webp browser support

flsFunctions.isWebp();

//===================================================================================
// Change color theme

let root = document.documentElement;

const setLightTheme = () => {
    root.style.setProperty('--color-main-text', 'rgba(0, 0, 0, .5)');
    root.style.setProperty('--color-main', '#fff');
    root.style.setProperty('--color-headings', '#000');
};

const setDarkTheme = () => {
    root.style.setProperty('--color-main-text', 'rgba(255, 255, 255, 0.5');
    root.style.setProperty('--color-main', '#000');
    root.style.setProperty('--color-headings', '#FFF');
};

const allThemesBtns = document.querySelectorAll('.theme-change');

allThemesBtns.forEach(el => el.addEventListener('change', function (e) {
    const allThemesBtns = document.querySelectorAll('.theme-change');
    if (this.checked) {
        setDarkTheme();
        allThemesBtns.forEach(el => el.checked = e.target.checked);
    } else {
        setLightTheme(allThemesBtns);
        allThemesBtns.forEach(el => el.checked = e.target.checked);
    }
}));


//===================================================================================
// Video controls

const videoEl = document.getElementById('hills-video');
const playBtn = document.getElementById('play-btn');
const playSvg = `<svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.871094 0.773926V15.2255L12.2259 7.99973L0.871094 0.773926Z" fill="white" />
                </svg>`;
const pauseSvg = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5,4 C6.67157288,4 6,4.67157288 6,5.5 L6,18.5 C6,19.3284271 6.67157288,20 7.5,20 L8.5,20 C9.32842712,20 10,19.3284271 10,18.5 L10,5.5 C10,4.67157288 9.32842712,4 8.5,4 L7.5,4 Z M7.5,3 L8.5,3 C9.88071187,3 11,4.11928813 11,5.5 L11,18.5 C11,19.8807119 9.88071187,21 8.5,21 L7.5,21 C6.11928813,21 5,19.8807119 5,18.5 L5,5.5 C5,4.11928813 6.11928813,3 7.5,3 Z M15.5,3 L16.5,3 C17.8807119,3 19,4.11928813 19,5.5 L19,18.5 C19,19.8807119 17.8807119,21 16.5,21 L15.5,21 C14.1192881,21 13,19.8807119 13,18.5 L13,5.5 C13,4.11928813 14.1192881,3 15.5,3 Z M15.5,4 C14.6715729,4 14,4.67157288 14,5.5 L14,18.5 C14,19.3284271 14.6715729,20 15.5,20 L16.5,20 C17.3284271,20 18,19.3284271 18,18.5 L18,5.5 C18,4.67157288 17.3284271,4 16.5,4 L15.5,4 Z"/>
                </svg>`;



//===================================================================================
// Play/pause video on button click

playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
        playBtn.classList.add('hide');
    } else {
        videoEl.pause();
        playBtn.classList.remove('hide');
    }
}, false);


//===================================================================================
// Play/pause video on  click
videoEl.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
        playBtn.classList.add('hide');
    } else {
        videoEl.pause();
        playBtn.classList.remove('hide');
    }
}, false);


//===================================================================================
// change play button icon
videoEl.addEventListener('play', function () {
    playBtn.innerHTML = pauseSvg;
}, false);

videoEl.addEventListener('pause', function () {
    playBtn.innerHTML = playSvg;
}, false);


//===================================================================================
// show gallery img 

const galleryImages = document.querySelectorAll('.gallery__img');
const backdrop = document.querySelector('.backdrop');
const main = document.querySelector('.main');
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

img1.addEventListener('click', e => {
    e.target.classList.toggle('show-full--img-1');
    backdrop.classList.add('show-backdrop');
});

img2.addEventListener('click', e => {
    e.target.classList.toggle('show-full--img-2');
    backdrop.classList.add('show-backdrop');
});

img3.addEventListener('click', e => {
    e.target.classList.toggle('show-full--img-3');
    backdrop.classList.add('show-backdrop');
});

backdrop.addEventListener('click', () => {
    backdrop.classList.remove('show-backdrop')
    main.style.filter = 'blur(0)';
    img1.classList.remove('show-full--img-1');
    img2.classList.remove('show-full--img-2');
    img3.classList.remove('show-full--img-3');
});
