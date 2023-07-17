export function loadPage() {
    setTimeout((e) => {
        let menu = document.querySelector('.header__nav'),
            headerTitle = document.querySelector('.header__title');
        document.body.style.opacity = '1';
        menu.classList.add('header--visible');
        headerTitle.classList.add('title--visible');
    }, 500);
}

export function scaleBanner() {
    let banner = document.querySelector('.header__image img');
    if (window.matchMedia("(min-width: 768px)").matches) {
        window.addEventListener('scroll', () => {
            let scrollPos = window.pageYOffset;

            let resize = Math.abs(1 + (0.00040 * scrollPos));
            if (scrollPos <= 900) {
              banner.setAttribute('style', `transform: scale(${resize});`);
            }
        });
    };
}

export function scrollCard() {
    let allPoster = document.querySelectorAll('.poster');
    let cardDelay = 0;
    let card;

    allPoster.forEach((item) => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            card = item.querySelectorAll('.card');
            card.forEach(e => {
                e.style.transitionDelay = "" + cardDelay + "s";
                cardDelay += 0.25;
            });
            cardDelay = 0;
        }
    });

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('poster--visible');
            // else entry.target.classList.remove('poster--visible');
        });
    }, {rootMargin: "0px 0px -200px 0px"});
    if (window.matchMedia("(max-width: 768px)").matches) {
        card = document.querySelectorAll('.card');
        card.forEach(function(el) { observer.observe(el); });
    } else {
        allPoster.forEach(function(el) { observer.observe(el); });
    }
}

export function scrollTop() {
    document.querySelector('.footer__button').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}