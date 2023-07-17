import * as anim from "./modules/animation.js";


document.addEventListener('DOMContentLoaded', (evt) => {
    anim.scaleBanner();
    anim.scrollCard();
    anim.scrollTop();
});

window.addEventListener("load", () => {
    anim.loadPage();
});