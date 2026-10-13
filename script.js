// ============================================================
// HEADER: SCROLL BEHAVIOR (Glassmorphism)
// ============================================================
const header = document.getElementById('gmHeader');

function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================================
// HEADER: MOBILE NAVIGATION
// ============================================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.gm-nav');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.gm-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ============================================================
// HERO SWIPER INITIALIZATION
// ============================================================
const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 900,
    watchSlidesProgress: true,
});

console.log('GM SOFT ÔÇö Header & Hero (Simple Backgrounds + Orbs) loaded.');

// ============================================================
// WHAT WE BUILD ÔÇö SWIPER INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.wwb-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.wwb-slider .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.wwb-slider .swiper-button-next',
                prevEl: '.wwb-slider .swiper-button-prev',
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
            },
        });
    }
});

// ============================================================
// CLIENT MESSAGES ÔÇö DATA & LOGIC
// ============================================================

// ----- Ï¿┘èÏº┘åÏºÏ¬ Ïº┘äÏ╣┘à┘äÏºÏí ┘êÏº┘ä┘àÏ¡ÏºÏ»Ï½ÏºÏ¬ (Ï¡Ï│Ï¿ Ïº┘ä┘äÏ║Ï®) -----
const pageLang = document.documentElement.lang || 'en';

const messagesEN = [
    {
        name: 'Dizayno DZ',
        initials: 'N',
        color: '#2f5c46',
        platform: 'WhatsApp',
        pcolor: '#3fce6a',
        time: '2:14 PM',
        preview: 'Bro, I\'m honestly impressed with the website...',
        messages: [
            { who: 'them', text: "Hey Moumen, bro I'm honestly impressed. The website turned out even better than I imagined." },
            { who: 'me', text: "Thank you so much! I'm really happy to hear that." },
            { who: 'them', text: "The UI feels premium, it's incredibly smooth, and everything loads fast." },
            { who: 'me', text: "I spent a lot of time optimizing every detail for the best experience." },
            { who: 'them', text: "You absolutely nailed it. I'll definitely recommend you to anyone looking for a developer." }
        ]
    },
    {
        name: 'Mariam',
        initials: 'M',
        color: '#5c2f4a',
        platform: 'Instagram DM',
        pcolor: '#e05a86',
        time: '2:18 PM',
        preview: 'I honestly didn\'t expect it to look this good...',
        messages: [
            { who: 'them', text: "Hi Moumen! I honestly didn't expect the final result to look this good." },
            { who: 'me', text: "That truly means a lot to me. Thank you!" },
            { who: 'them', text: "Everything feels modern, elegant, and very professional." },
            { who: 'me', text: "I'm glad you noticed the small details. They make a huge difference." },
            { who: 'them', text: "Thank you so much for your hard work. It exceeded all my expectations." }
        ]
    },
    {
        name: 'Brahim RDX',
        initials: 'B',
        color: '#2b4f7a',
        platform: 'Telegram',
        pcolor: '#3ea8e0',
        time: '2:21 PM',
        preview: 'Bro... this is on another level ­ƒöÑ',
        messages: [
            { who: 'them', text: "Bro... this is on another level ­ƒöÑ I seriously don't know what to say." },
            { who: 'me', text: "­ƒÿé I'm really glad you liked it, bro." },
            { who: 'them', text: "The animations, the colors, the overall experience... everything feels world-class." },
            { who: 'me', text: "That was exactly the goal. I wanted it to feel unique." },
            { who: 'them', text: "Mission accomplished! This is easily one of the best portfolio websites I've seen." }
        ]
    },
    {
        name: 'Ilyes OX',
        initials: 'I',
        color: '#3a3a68',
        platform: 'Discord',
        pcolor: '#8b7bf0',
        time: '2:24 PM',
        preview: 'Amazing work, Moumen!',
        messages: [
            { who: 'them', text: "Amazing work, Moumen! Thank you so much for everything." },
            { who: 'me', text: "You're very welcome! It was a pleasure working with you." },
            { who: 'them', text: "Your communication was excellent from start to finish, and the quality is outstanding." },
            { who: 'me', text: "I always try to deliver the best possible experience." },
            { who: 'them', text: "Keep doing what you're doing. You're going to build an incredible reputation." }
        ]
    }
];

const messagesFR = [
    {
        name: 'Dizayno DZ',
        initials: 'N',
        color: '#2f5c46',
        platform: 'WhatsApp',
        pcolor: '#3fce6a',
        time: '14:14',
        preview: 'Franchement, je suis impressionn├® par le site...',
        messages: [
            { who: 'them', text: "H├® Moumen, franchement je suis impressionn├®. Le site est encore mieux que ce que j'avais imagin├®." },
            { who: 'me', text: "Merci beaucoup ! Je suis vraiment ravi de l'entendre." },
            { who: 'them', text: "L'interface est premium, c'est incroyablement fluide, et tout charge rapidement." },
            { who: 'me', text: "J'ai pass├® beaucoup de temps ├á optimiser chaque d├®tail pour la meilleure exp├®rience." },
            { who: 'them', text: "Tu as vraiment tout d├®chir├®. Je te recommanderai certainement ├á quiconque cherche un d├®veloppeur." }
        ]
    },
    {
        name: 'Mariam',
        initials: 'M',
        color: '#5c2f4a',
        platform: 'Instagram DM',
        pcolor: '#e05a86',
        time: '14:18',
        preview: 'Je ne m\'attendais pas ├á ce que ce soit aussi beau...',
        messages: [
            { who: 'them', text: "Salut Moumen ! Je n'honn├¬tement pas attendu que le r├®sultat final soit aussi beau." },
            { who: 'me', text: "Cela compte vraiment pour moi. Merci !" },
            { who: 'them', text: "Tout est moderne, ├®l├®gant et tr├¿s professionnel." },
            { who: 'me', text: "Je suis content que tu aies remarqu├® les petits d├®tails. Ils font une ├®norme diff├®rence." },
            { who: 'them', text: "Merci beaucoup pour ton travail acharn├®. Cela a d├®pass├® toutes mes attentes." }
        ]
    },
    {
        name: 'Brahim RDX',
        initials: 'B',
        color: '#2b4f7a',
        platform: 'Telegram',
        pcolor: '#3ea8e0',
        time: '14:21',
        preview: 'Franchement... c\'est un autre niveau ­ƒöÑ',
        messages: [
            { who: 'them', text: "Franchement... c'est un autre niveau ­ƒöÑ Je ne sais vraiment pas quoi dire." },
            { who: 'me', text: "­ƒÿé Je suis vraiment content que ├ºa te plaise, fr├¿re." },
            { who: 'them', text: "Les animations, les couleurs, l'exp├®rience globale... tout est ├á un niveau mondial." },
            { who: 'me', text: "C'├®tait exactement le but. Je voulais que ce soit unique." },
            { who: 'them', text: "Mission accomplie ! C'est facilement l'un des meilleurs sites portfolio que j'ai vus." }
        ]
    },
    {
        name: 'Ilyes OX',
        initials: 'I',
        color: '#3a3a68',
        platform: 'Discord',
        pcolor: '#8b7bf0',
        time: '14:24',
        preview: 'Excellent travail, Moumen !',
        messages: [
            { who: 'them', text: "Excellent travail, Moumen ! Merci beaucoup pour tout." },
            { who: 'me', text: "Avec plaisir ! C'├®tait un vrai plaisir de travailler avec toi." },
            { who: 'them', text: "Ta communication ├®tait excellente du d├®but ├á la fin, et la qualit├® est exceptionnelle." },
            { who: 'me', text: "J'essaie toujours de fournir la meilleure exp├®rience possible." },
            { who: 'them', text: "Continue comme ├ºa. Tu vas construire une r├®putation incroyable." }
        ]
    }
];

const messagesAR = [

    {
        name: 'Dizayno DZ',
        initials: 'N',
        color: '#2f5c46',
        platform: 'WhatsApp',
        pcolor: '#3fce6a',
        time: '14:14',
        preview: 'ÏÁÏ▒ÏºÏ¡Ï® Ïº┘äÏ│┘èÏ¬ ┘üÏº┘é Ïº┘äÏ¬┘ê┘éÏ╣ÏºÏ¬...',
        messages: [
            { who: 'them', text: "Ï│┘äÏº┘à ┘à┘ê┘à┘åÏî ÏÁÏ▒ÏºÏ¡Ï® ÏºÏ«┘è ┘èÏ╣ÏÀ┘è┘â Ïº┘äÏÁÏ¡Ï® Ïº┘äÏ│┘èÏ¬ ┘üÏº┘é Ïº┘äÏ¬┘ê┘éÏ╣ÏºÏ¬ . Ïº┘ä┘åÏ¬┘èÏ¼Ï® ┘çÏº┘è┘äÏ® Ï¿Ï▓Ïº┘ü." },
            { who: 'me', text: "Ïº┘ä┘ä┘ç ┘èÏ¡┘üÏ©┘â  Ï«┘ê┘èÏºÏî ┘üÏ▒Ï¡Ï¬┘å┘è Ï¿Ï▓Ïº┘ü ┘â┘è Ï┤┘üÏ¬┘ê Ï╣Ï¼Ï¿┘â." },
            { who: 'them', text: "Ïº┘äÏ»┘èÏ▓Ïº┘è┘å  Ï¿Ï▓Ïº┘ü ┘çÏºÏ▒Ï¿ ┘ê┘â┘ä Ï¡ÏºÏ¼Ï® Ï¿Ïº┘è┘åÏ® ┘ü┘è Ï¿┘äÏºÏÁÏ¬┘çÏº ┘ê┘àÏº ┘âÏº┘è┘å Ï¡Ï¬┘ë Ï¡ÏºÏ¼Ï® Ï▓Ïº┘èÏ»Ï®." },
            { who: 'me', text: "Ïº┘äÏ¡┘àÏ» ┘ä┘ä┘ç ÏºÏ«┘è Ï«Ï▒Ï¼ ┘â┘è┘àÏº Ï¡ÏºÏ¿┘ê ┘åÏ¬Ïº ┘çÏ»Ïº ┘ç┘ê Ïº┘ä┘çÏ»┘ü ┘åÏ¬ÏºÏ╣┘åÏº Ï¡┘åÏº ." },
            { who: 'them', text: "┘üÏ▒┘è Ï┤┘âÏ▒Ïº ┘ä┘è┘â ┘ê┘ä┘è┘â┘èÏ¿ ┘âÏº┘à┘äÏ®  Ï«Ï»┘àÏ® Ï¼Ï» ┘àÏ¬┘é┘ê┘åÏ® Ï▒Ï¿┘è ┘èÏ¿ÏºÏ▒┘â . ┘êÏº┘è Ï┤Ï«ÏÁ  Ï¡ÏºÏ¿ ┘èÏ«Ï»┘à  ┘å┘êÏÁ┘è Ï¿┘è┘â." }
        ]
    },

    {
        name: 'Mariam',
        initials: 'M',
        color: '#5c2f4a',
        platform: 'Instagram DM',
        pcolor: '#e05a86',
        time: '14:18',
        preview: 'Ïº┘ä┘åÏ¬┘èÏ¼Ï® Ï«Ï▒Ï¼Ï¬ Ï«┘èÏ▒ ┘à┘å Ïº┘ä┘ä┘è Ï¬┘ê┘éÏ╣Ï¬...',
        messages: [
            { who: 'them', text: "Ï│┘äÏº┘à ÏºÏ«┘è ! Ï┤┘üÏ¬ Ïº┘ä┘à┘ê┘éÏ╣ ┘âÏº┘à┘äÏî Ï¿ÏÁÏ▒ÏºÏ¡Ï® Ïº┘ä┘åÏ¬┘èÏ¼Ï® Ï«Ï▒Ï¼Ï¬ Ï«┘èÏ▒ ┘à┘å Ïº┘ä┘ä┘è ┘â┘åÏ¬ ┘àÏ¬┘ê┘éÏ╣Ï® ┘àÏ¬Ïº┘à┘åÏ┤ Ï┤Ï¡Ïº┘ä Ï▒Ïº┘å┘è ┘üÏ▒Ï¡Ïº┘åÏ® ­ƒÿ¡." },
            { who: 'me', text: "Ïº┘äÏ¡┘àÏ» ┘ä┘ä┘çÏî ┘çÏ░Ïº ┘ç┘ê Ïº┘ä┘çÏ»┘ü ┘ä┘è ┘â┘åÏº Ï¡ÏºÏ¿┘è┘å ┘å┘êÏÁ┘ä┘ê┘ä┘ê." },
            { who: 'them', text: "Ï╣Ï¼Ï¿┘å┘è Ï¿Ï▓Ïº┘ü ┘â┘è┘üÏºÏ┤ Ï▒Ï¬Ï¿Ï¬ Ïº┘ä┘àÏ¡Ï¬┘ê┘ëÏî Ï«ÏºÏÁÏ® Ï¬ÏÁ┘à┘è┘à  Ï¿Ï▓Ïº┘ü Ï╣Ï¼Ï¿┘å┘è . Ï¼Ïº┘ê ÏºÏ¡Ï¬Ï▒Ïº┘ü┘è ┘ê┘àÏºÏ┤┘è ┘àÏ¿Ïº┘äÏ║ ┘ü┘è┘ç┘à." },
            { who: 'me', text: "  Ïº┘äÏ¡┘àÏ» ┘ä┘ä┘ç ┘â┘è Ï╣Ï¼Ï¿┘â Ïº┘è ÏºÏ│Ï¬┘üÏ│ÏºÏ▒ ┘àÏ▒Ï¡Ï¿Ïº Ï¿┘è┘â ┘ü┘è Ïº┘è ┘ê┘éÏ¬." },
            { who: 'them', text: "Ï¿ÏÁÏ▒ÏºÏ¡Ï® Ï┤┘âÏ▒Ïº Ï¿Ï▓Ïº┘ü ┘üÏ▒┘è┘é ┘åÏ¬ÏºÏ╣┘â┘à ÏºÏ¡Ï¬Ï▒Ïº┘ü┘è ┘ê┘àÏ¡Ï¬Ï▒┘à   Ï┤┘âÏ▒Ïº  ." }
        ]
    },

    {
        name: 'Brahim RDX',
        initials: 'B',
        color: '#2b4f7a',
        platform: 'Telegram',
        pcolor: '#3ea8e0',
        time: '14:21',
        preview: 'Ï«┘ê┘èÏº ┘çÏ░Ïº ┘àÏ│Ï¬┘ê┘ë ÏóÏ«Ï▒ ­ƒöÑ',
        messages: [
            { who: 'them', text: "Ï«┘ê┘èÏº Ï┤┘üÏ¬ Ïº┘ä┘à┘ê┘éÏ╣... ┘çÏ░Ïº ┘àÏ│Ï¬┘ê┘ë ÏóÏ«Ï▒ ­ƒöÑ Ï¿ÏÁÏ▒ÏºÏ¡Ï® ┘àÏº ┘â┘åÏ¬Ï┤ ┘åÏ¬┘ê┘éÏ╣ ┘èÏ«Ï▒Ï¼ ┘ç┘âÏ░Ïº." },
            { who: 'me', text: "­ƒÿé ┘èÏ╣ÏÀ┘è┘â Ïº┘äÏÁÏ¡Ï®Ïî ┘üÏ▒Ï¡Ï¬ Ï¿Ï▓Ïº┘ü ┘â┘è Ï╣Ï¼Ï¿┘â." },
            { who: 'them', text: "Ïº┘äÏ¡Ï▒┘âÏºÏ¬Ïî Ïº┘äÏú┘ä┘êÏº┘åÏî ÏÀÏ▒┘è┘éÏ® Ï╣Ï▒ÏÂ Ïº┘ä┘àÏ╣┘ä┘ê┘àÏºÏ¬ ┘êÏ¡Ï¬┘ë Ïº┘äÏ¬┘üÏºÏÁ┘è┘ä Ïº┘äÏÁÏ║┘èÏ▒Ï®... ┘â┘äÏ┤┘è Ï«Ï»Ïº┘à ┘àÏ╣ Ï¿Ï╣ÏÂÏº┘ç." },
            { who: 'me', text: "┘çÏ░Ïº Ï¿Ïº┘äÏÂÏ¿ÏÀ ┘ä┘è ┘â┘åÏ¬ Ï¡ÏºÏ¿ ┘åÏ¡┘é┘é┘êÏî Ï¬Ï¼Ï▒Ï¿Ï® Ï¬┘â┘ê┘å ┘àÏ«Ï¬┘ä┘üÏ® Ï╣┘ä┘ë Ïº┘ä┘à┘êÏº┘éÏ╣ Ïº┘äÏ╣ÏºÏ»┘èÏ®." },
            { who: 'them', text: "Ï¿┘äÏº ┘àÏ¼Ïº┘à┘äÏ®Ïî ┘à┘å ÏúÏ¡Ï│┘å ┘à┘êÏº┘éÏ╣ Ïº┘äÏ¿┘êÏ▒Ï¬┘ü┘ê┘ä┘è┘ê ┘ä┘è Ï┤┘üÏ¬┘ç┘à. ┘â┘à┘ä┘ê Ï¿┘å┘üÏ│ Ïº┘ä┘àÏ│Ï¬┘ê┘ë ┘àÏ▓┘èÏ» ┘à┘å Ï¬┘ê┘ü┘è┘é Ïº┘å Ï┤ÏºÏí Ïº┘ä┘ä┘ç ­ƒöÑ" }
        ]
    },

    {
        name: 'Ilyes OX',
        initials: 'I',
        color: '#3a3a68',
        platform: 'Discord',
        pcolor: '#8b7bf0',
        time: '14:24',
        preview: 'Ï«Ï»┘àÏ® ┘åÏ©┘è┘üÏ® Ï¿Ï▓Ïº┘üÏî ┘èÏ╣ÏÀ┘è┘â Ïº┘äÏÁÏ¡Ï®...',
        messages: [
            { who: 'them', text: "┘èÏ╣ÏÀ┘è┘â Ïº┘äÏÁÏ¡Ï® Ï«┘ê┘èÏº ┘à┘ê┘à┘åÏî Ïº┘äÏ«Ï»┘àÏ® Ï«Ï▒Ï¼Ï¬ ┘â┘è┘àÏº Ï¬┘üÏº┘ç┘à┘åÏº  ." },
            { who: 'me', text: "Ïº┘äÏ¡┘àÏ» ┘ä┘ä┘ç  Ï«┘ê┘èÏºÏî ┘âÏº┘å ┘à┘å Ï┤Ï▒┘ü ┘ä┘èÏº ┘åÏ¬Ï╣Ïº┘à┘ä  ┘àÏ╣Ïº┘â." },
            { who: 'them', text: "Ï¿Ïº┘ä┘åÏ│Ï¿Ï® ┘ü┘éÏÀ ┘ü┘êÏ▒┘àÏºÏ│┘è┘ê ┘åÏ¬ÏºÏ╣ ┘ä┘è ┘â┘èÏ¿ ┘ê┘âÏ¬Ïº Ïº┘å Ï┤ÏºÏí Ïº┘ä┘ä┘ç  ." },
            { who: 'me', text: "┘è┘à┘â┘å ┘çÏ»Ïº ÏºÏ│Ï¿┘êÏ╣ ÏºÏ»Ïº Ï¼┘èÏ¬ Ïº┘åÏº ┘ê┘äÏº   ┘èÏ¼Ï¿┘â Ï┤Ï«ÏÁ ÏºÏ«Ï▒ ┘à┘å ┘üÏ▒┘è┘é ┘èÏ╣┘å┘è ┘â┘ê┘å ┘àÏ¬┘å┘ç┘è ." },
            { who: 'them', text: "ÏºÏ«┘ê┘èÏº ┘àÏ▒┘è┘é┘äÏ® ┘èÏ╣┘èÏÀ ÏÁÏ¡Ï®  ┘àÏºÏ┤ÏºÏí Ïº┘ä┘ä┘ç   ┘àÏÁÏ║Ï▒ ┘êÏÀ┘èÏ▒┘ê Ï▒Ï¿┘è ┘èÏ¿ÏºÏ▒┘â. ÏÑ┘å Ï┤ÏºÏí Ïº┘ä┘ä┘ç Ï¬┘â┘ê┘å Ï¿┘è┘åÏºÏ¬┘åÏº ┘àÏ┤ÏºÏ▒┘èÏ╣ ÏúÏ«Ï▒┘ë." }
        ]
    }

];
const conversations = pageLang === 'fr' ? messagesFR : pageLang === 'ar' ? messagesAR : messagesEN;

// ----- Ï╣┘åÏºÏÁÏ▒ DOM -----
const msgList = document.getElementById('msg-list');
const threadBody = document.getElementById('thread-body');
const liveBadge = document.getElementById('live-badge');
const threadInput = document.getElementById('thread-input');
const sendBtn = document.getElementById('thread-send');
const voiceBtn = document.getElementById('gm-voice-btn');
const voiceStatus = document.getElementById('voice-status');
const inboxLabel = pageLang === 'fr' ? 'Bo├«te de r├®ception ÔÇö' : pageLang === 'ar' ? 'ÏÁ┘åÏ»┘ê┘é Ïº┘ä┘êÏºÏ▒Ï» ÔÇö' : 'Inbox ÔÇö';
const convLabel = pageLang === 'fr' ? 'conversations' : pageLang === 'ar' ? '┘àÏ¡ÏºÏ»Ï½ÏºÏ¬' : 'conversations';
document.getElementById('inbox-count').textContent = `${inboxLabel} ${conversations.length} ${convLabel}`;

let autoplayOn = true;
let autoplayGen = 0;
let currentConvIndex = 0;
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ----- Voice Recognition (Speech-to-Text) -----
let recognition = null;
let isListening = false;

function initVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        voiceBtn.disabled = true;
        voiceBtn.title = 'Voice not supported in this browser';
        voiceStatus.textContent = 'ÔÜá´©Å Voice input not supported';
        voiceStatus.style.color = '#ef4444';
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceStatus.textContent = '­ƒÄñ Listening... Speak now';
        voiceStatus.className = 'voice-status active';
    };

    recognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }
        if (interimTranscript) {
            threadInput.value = interimTranscript;
            threadInput.style.borderColor = '#f59e0b';
        }
        if (finalTranscript) {
            threadInput.value = finalTranscript;
            threadInput.style.borderColor = 'var(--msg-accent)';
            setTimeout(() => {
                if (threadInput.value.trim()) {
                    sendMessage(true); // true = from voice
                }
            }, 400);
        }
    };

    recognition.onerror = (event) => {
        console.warn('Voice error:', event.error);
        if (event.error === 'not-allowed') {
            voiceStatus.textContent = '­ƒÜ½ Microphone access denied';
        } else {
            voiceStatus.textContent = `ÔÜá´©Å Error: ${event.error}`;
        }
        voiceStatus.className = 'voice-status';
        stopListening();
    };

    recognition.onend = () => {
        stopListening();
        if (threadInput.value.trim()) {
            // If there's text but it wasn't sent (e.g., user stopped talking without final)
            // We keep it in the input field for manual sending.
        }
    };
}

function startListening() {
    if (!recognition) return;
    if (isListening) {
        stopListening();
        return;
    }
    try {
        recognition.start();
        voiceStatus.className = 'voice-status active';
    } catch (e) {
        console.warn('Voice already started?', e);
    }
}

function stopListening() {
    isListening = false;
    voiceBtn.classList.remove('listening');
    voiceStatus.className = 'voice-status';
    if (recognition) {
        try { recognition.stop(); } catch (e) {}
    }
    threadInput.style.borderColor = 'var(--msg-border)';
}

voiceBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (voiceBtn.disabled) return;
    if (isListening) {
        stopListening();
        voiceStatus.textContent = 'ÔÅ╣´©Å Stopped';
        setTimeout(() => { voiceStatus.textContent = ''; }, 1000);
    } else {
        startListening();
    }
});

// ----- ÏÑÏ╣Ï»ÏºÏ»ÏºÏ¬ Ïº┘ä┘àÏ¡ÏºÏ»Ï½Ï® Ïº┘äÏ¬┘ä┘éÏºÏª┘èÏ® -----
function setThreadHead(conv) {
    document.getElementById('thread-avatar').textContent = conv.initials;
    document.getElementById('thread-avatar').style.background = conv.color;
    document.getElementById('thread-name').textContent = conv.name;
    document.getElementById('thread-sub').textContent = `via ${conv.platform}`;
}

function highlightActive(idx) {
    document.querySelectorAll('.msg-item').forEach((x, i) => x.classList.toggle('active', i === idx));
}

function updateLiveBadge() {
    if (autoplayOn) {
        liveBadge.innerHTML = '<span class="live-dot"></span> Auto-playing';
        liveBadge.classList.remove('manual');
    } else {
        liveBadge.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Manual ÔÇö click to resume';
        liveBadge.classList.add('manual');
    }
}

async function composeAndSend(who, text, gen) {
    if (gen !== autoplayGen) return false;

    if (who === 'me') {
        threadInput.classList.add('typing-sim');
        threadInput.value = '';
        for (let i = 0; i < text.length; i++) {
            if (gen !== autoplayGen) { threadInput.classList.remove('typing-sim'); return false; }
            threadInput.value += text[i];
            await sleep(35 + Math.random() * 35);
        }
        await sleep(500);
        if (gen !== autoplayGen) { threadInput.classList.remove('typing-sim'); return false; }
        sendBtn.classList.add('sending');
        await sleep(180);
        threadInput.value = '';
        threadInput.classList.remove('typing-sim');
        sendBtn.classList.remove('sending');
    } else {
        const typing = document.createElement('div');
        typing.className = 'typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        threadBody.appendChild(typing);
        threadBody.scrollTop = threadBody.scrollHeight;
        await sleep(1100 + Math.random() * 500);
        if (gen !== autoplayGen) { typing.remove(); return false; }
        typing.remove();
    }

    if (gen !== autoplayGen) return false;
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + who;
    if (who === 'me') {
        bubble.innerHTML = `<span class="voice-indicator"><i class="fa-solid fa-microphone"></i></span> ${text}`;
    } else {
        bubble.textContent = text;
    }
    bubble.style.opacity = '0';
    bubble.style.transition = 'opacity .25s ease';
    threadBody.appendChild(bubble);
    threadBody.scrollTop = threadBody.scrollHeight;
    requestAnimationFrame(() => bubble.style.opacity = '1');
    return true;
}

async function playConversation(idx, gen) {
    if (gen !== autoplayGen) return;
    currentConvIndex = idx;
    const conv = conversations[idx];
    highlightActive(idx);
    setThreadHead(conv);
    threadBody.innerHTML = '';
    threadInput.value = '';

    for (const m of conv.messages) {
        if (gen !== autoplayGen) return;
        const sent = await composeAndSend(m.who, m.text, gen);
        if (!sent) return;
        await sleep(900);
    }

    if (gen !== autoplayGen) return;
    await sleep(3500);
    if (gen !== autoplayGen || !autoplayOn) return;
    const nextIdx = (idx + 1) % conversations.length;
    playConversation(nextIdx, gen);
}

function startAutoplay(fromIndex) {
    autoplayOn = true;
    autoplayGen++;
    updateLiveBadge();
    playConversation(fromIndex, autoplayGen);
}

// ----- Ï¿┘åÏºÏí ┘éÏºÏª┘àÏ® Ïº┘äÏ╣┘à┘äÏºÏí -----
conversations.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'msg-item';
    el.innerHTML = `
        <div class="avatar" style="background:${c.color}">${c.initials}</div>
        <div class="msg-item-body">
            <div class="msg-item-top"><span class="name">${c.name}</span><span class="time">${c.time}</span></div>
            <div class="msg-item-preview">${c.preview}</div>
            <span class="platform-tag" style="background:color-mix(in srgb, ${c.pcolor} 18%, transparent); color:${c.pcolor}">${c.platform.toUpperCase()}</span>
        </div>`;
    el.addEventListener('click', () => {
        autoplayGen++;
        autoplayOn = true;
        updateLiveBadge();
        playConversation(i, autoplayGen);
        highlightActive(i);
        if (isListening) stopListening();
    });
    msgList.appendChild(el);
});

// ----- ÏÑÏ▒Ï│Ïº┘ä Ïº┘äÏ▒Ï│ÏºÏª┘ä (┘èÏ»┘ê┘èÏº┘ï Ïú┘ê Ï¿Ïº┘äÏÁ┘êÏ¬) -----
function sendMessage(fromVoice = false) {
    const val = threadInput.value.trim();
    if (!val) return;

    if (!fromVoice) {
        autoplayOn = false;
        autoplayGen++;
        updateLiveBadge();
        if (isListening) stopListening();
    }

    sendBtn.classList.add('sending');
    setTimeout(() => sendBtn.classList.remove('sending'), 180);

    const bubble = document.createElement('div');
    bubble.className = 'bubble me';
    if (fromVoice) {
        bubble.innerHTML = `<span class="voice-indicator"><i class="fa-solid fa-microphone"></i></span> ${val}`;
        voiceStatus.textContent = 'Ô£à Voice message sent!';
        voiceStatus.className = 'voice-status success';
        setTimeout(() => { voiceStatus.className = 'voice-status'; voiceStatus.textContent = ''; }, 2000);
    } else {
        bubble.textContent = val;
    }
    threadBody.appendChild(bubble);
    threadInput.value = '';
    threadBody.scrollTop = threadBody.scrollHeight;

    // Ï▒Ï» Ï¬┘ä┘éÏºÏª┘è ┘à┘å Ïº┘äÏ╣┘à┘è┘ä (┘àÏ¡Ïº┘âÏºÏ®)
    setTimeout(() => {
        const typing = document.createElement('div');
        typing.className = 'typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        threadBody.appendChild(typing);
        threadBody.scrollTop = threadBody.scrollHeight;

        setTimeout(() => {
            typing.remove();
            const reply = document.createElement('div');
            reply.className = 'bubble them';
            const replies = [
                'Got it! I\'ll review and get back to you shortly.',
                'Thanks! That sounds great. Let\'s move forward.',
                'Perfect! I\'ll share this with the team right away.',
                'Excellent! Looking forward to working with you on this.'
            ];
            reply.textContent = replies[Math.floor(Math.random() * replies.length)];
            threadBody.appendChild(reply);
            threadBody.scrollTop = threadBody.scrollHeight;
        }, 1200);
    }, 400);
}

// ----- ÏúÏ¡Ï»ÏºÏ½ Ïº┘äÏ¡┘é┘ä -----
sendBtn.addEventListener('click', () => sendMessage(false));
threadInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage(false);
});

// ----- ÏÑÏ╣ÏºÏ»Ï® Ïº┘äÏ¬Ï┤Ï║┘è┘ä Ïº┘äÏ¬┘ä┘éÏºÏª┘è Ï╣┘åÏ» Ïº┘ä┘å┘éÏ▒ Ï╣┘ä┘ë Ïº┘äÏ┤ÏºÏ▒Ï® -----
liveBadge.addEventListener('click', () => {
    if (!autoplayOn) {
        startAutoplay(currentConvIndex);
    }
});

// ----- Ï¬┘ç┘èÏªÏ® Ïº┘äÏ│ÏºÏ╣Ï® -----
function tickClock() {
    const d = new Date();
    const label = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    document.querySelectorAll('.clock').forEach(el => el.textContent = label);
}
tickClock();
setInterval(tickClock, 15000);

// ----- Ï¬┘ç┘èÏªÏ® Ïº┘äÏÁ┘êÏ¬ ┘êÏº┘ä┘àÏ¡ÏºÏ»Ï½Ï® Ïº┘äÏ¬┘ä┘éÏºÏª┘èÏ® -----
initVoice();
startAutoplay(0);
console.log('GM SOFT ÔÇö Client Messages with Voice Input loaded.');

// ============================================================
// TRUSTED CLIENTS — WALL OF LOVE (voice testimonials)
// ============================================================
const trustEN = [
    { name: 'Dizayno DZ', initials: 'N', color: '#2f5c46', role: 'Founder @ Dizayno Studio', platform: 'WhatsApp', pcolor: '#3fce6a', rating: 5, project: 'Studio Portfolio',
      quote: "The website turned out even better than I imagined — premium feel, incredibly smooth, and everything loads fast.",
      voice: 'audio/en-voice-1.wav' },
    { name: 'Mariam', initials: 'M', color: '#5c2f4a', role: 'Content Creator', platform: 'Instagram', pcolor: '#e05a86', rating: 5, project: 'Personal Branding',
      quote: "Modern, elegant and very professional. They cared about every small detail that makes a huge difference.",
      voice: 'audio/en-voice-2.wav' },
    { name: 'Brahim RDX', initials: 'B', color: '#2b4f7a', role: 'Streamer & Entrepreneur', platform: 'Telegram', pcolor: '#3ea8e0', rating: 5, project: 'Streaming Platform',
      quote: "The animations, the colors, the overall experience — everything feels world-class. Easily one of the best.",
      voice: 'audio/en-voice-3.wav' },
    { name: 'Ilyes OX', initials: 'I', color: '#3a3a68', role: 'Project Manager', platform: 'Discord', pcolor: '#8b7bf0', rating: 5, project: 'SaaS Dashboard',
      quote: "Excellent communication from start to finish, and the quality is outstanding. A real pleasure to work with.",
      voice: 'audio/en-voice-4.wav' }
];

const trustFR = [
    { name: 'Dizayno DZ', initials: 'N', color: '#2f5c46', role: 'Fondateur @ Dizayno Studio', platform: 'WhatsApp', pcolor: '#3fce6a', rating: 5, project: 'Portfolio Studio',
      quote: "Le site est encore mieux que ce que j'avais imaginé — aspect premium, incroyablement fluide.",
      voice: 'audio/fr-voice-1.wav' },
    { name: 'Mariam', initials: 'M', color: '#5c2f4a', role: 'Créatrice de contenu', platform: 'Instagram', pcolor: '#e05a86', rating: 5, project: 'Site Personnel',
      quote: "Moderne, élégant et très professionnel. Ils ont soigné chaque petit détail qui fait la différence.",
      voice: 'audio/fr-voice-2.wav' },
    { name: 'Brahim RDX', initials: 'B', color: '#2b4f7a', role: 'Streamer & Entrepreneur', platform: 'Telegram', pcolor: '#3ea8e0', rating: 5, project: 'Plateforme de Stream',
      quote: "Les animations, les couleurs, l'expérience globale... tout est à un niveau mondial.",
      voice: 'audio/fr-voice-3.wav' },
    { name: 'Ilyes OX', initials: 'I', color: '#3a3a68', role: 'Chef de projet', platform: 'Discord', pcolor: '#8b7bf0', rating: 5, project: 'Tableau de bord SaaS',
      quote: "Communication excellente du début à la fin, qualité exceptionnelle. Un vrai plaisir.",
      voice: 'audio/fr-voice-4.wav' }
];

const trustAR = [
    { name: 'Dizayno DZ', initials: 'N', color: '#2f5c46', role: 'مؤسس @ Dizayno Studio', platform: 'WhatsApp', pcolor: '#3fce6a', rating: 5, project: 'موقع استوديو',
      quote: "السيت خرج أحسن من اللي تخيلت. ديزاين هارب، كلشي خفيف وكيبان في بلاصتو.",
      voice: 'audio/ar-voice-1.wav' },
    { name: 'Mariam', initials: 'M', color: '#5c2f4a', role: 'صانعة محتوى', platform: 'Instagram', pcolor: '#e05a86', rating: 5, project: 'موقع شخصي',
      quote: "موديرن، أنيق واحترافي بزاف. علّقو على أصغر التفاصيل لي كيدير فرق كبير.",
      voice: 'audio/ar-voice-2.wav' },
    { name: 'Brahim RDX', initials: 'B', color: '#2b4f7a', role: 'ستريمر ورائد أعمال', platform: 'Telegram', pcolor: '#3ea8e0', rating: 5, project: 'منصة بث',
      quote: "الحركات، الألوان، التجربة كاملة... كلو عالمي level. من أحسن مواقع بلا مبالغة.",
      voice: 'audio/ar-voice-3.wav' },
    { name: 'Ilyes OX', initials: 'I', color: '#3a3a68', role: 'مدير مشروعات', platform: 'Discord', pcolor: '#8b7bf0', rating: 5, project: 'لوحة تحكم SaaS',
      quote: "تواصل ممتاز من الأول للآخر، والجودة خيالية. الشرف نتعامل معاكم.",
      voice: 'audio/ar-voice-4.wav' }
];

[trustEN, trustFR, trustAR].forEach(function (arr) {
    arr.forEach(function (c, i) { c.img = 'images/clients/' + (i + 1) + '.jpg'; });
});

const trustData = pageLang === 'fr' ? trustFR : pageLang === 'ar' ? trustAR : trustEN;
const trustOfficialLabel = pageLang === 'fr' ? 'CLIENT OFFICIEL' : pageLang === 'ar' ? 'عميل رسمي' : 'OFFICIAL CLIENT';

const trustSlidesEl = document.getElementById('trustSlides');
let trustSwiper = null;
let trustAudio = null;
let trustPlayingBtn = null;

window.pauseTrustVoice = function () {
    if (trustAudio) {
        try { trustAudio.pause(); } catch (e) {}
    }
    if (trustPlayingBtn) {
        const icon = trustPlayingBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-play';
        const player = trustPlayingBtn.closest('.trust-player');
        if (player) {
            const prog = player.querySelector('.trust-progress');
            if (prog) prog.style.width = '0%';
        }
        const card = trustPlayingBtn.closest('.trust-card');
        if (card) card.classList.remove('is-playing');
        trustPlayingBtn = null;
    }
};

function trustStars(n) {
    return '★'.repeat(n) + '☆'.repeat(Math.max(0, 5 - n));
}

function trustFmt(s) {
    if (!isFinite(s) || s < 0) s = 0;
    return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

function trustWaveHTML(count) {
    let bars = '';
    for (let i = 0; i < count; i++) {
        const h = 30 + Math.round(Math.random() * 65);
        bars += `<span style="height:${h}%"></span>`;
    }
    return bars;
}

function bindTrustPlayer(scope) {
    const audio = scope.querySelector('audio');
    const btn = scope.querySelector('.trust-play');
    if (!audio || !btn) return;
    const icon = btn.querySelector('i');
    const card = scope.closest('.trust-card') || scope;
    const prog = scope.querySelector('.trust-progress');
    const durEl = scope.querySelector('.trust-dur');
    let total = 0;

    audio.addEventListener('loadedmetadata', () => { total = audio.duration; durEl.textContent = trustFmt(total); });
    if (audio.readyState >= 1) { total = audio.duration; durEl.textContent = trustFmt(total); }

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) prog.style.width = (audio.currentTime / audio.duration * 100) + '%';
        durEl.textContent = trustFmt(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        icon.className = 'fa-solid fa-play';
        card.classList.remove('is-playing');
        prog.style.width = '0%';
        durEl.textContent = trustFmt(total);
        if (trustAudio === audio) { trustAudio = null; trustPlayingBtn = null; }
    });

    btn.addEventListener('click', () => {
        const isPlayingThis = trustAudio === audio && !audio.paused;
        window.pauseTrustVoice();
        if (!isPlayingThis) {
            if (typeof stopCurrentAudio === 'function') stopCurrentAudio();
            audio.play().then(() => {
                icon.className = 'fa-solid fa-pause';
                card.classList.add('is-playing');
                trustAudio = audio;
                trustPlayingBtn = btn;
            }).catch(() => {});
        }
    });
}

function renderTrustSlides() {
    trustSlidesEl.innerHTML = trustData.map(c => `
        <div class="swiper-slide">
            <article class="trust-card">
                <div class="trust-card-head">
                    <div class="trust-avatar"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
                    <div class="trust-id">
                        <div class="trust-name">${c.name} <i class="fa-solid fa-circle-check trust-verified"></i></div>
                        <div class="trust-role">${c.role}</div>
                    </div>
                    <span class="trust-official"><i class="fa-solid fa-shield-halved"></i> ${trustOfficialLabel}</span>
                </div>
                <blockquote class="trust-quote"><span class="trust-qmark">&ldquo;</span>${c.quote}</blockquote>
                <div class="trust-player">
                    <button class="trust-play" type="button" aria-label="Play testimonial"><i class="fa-solid fa-play"></i></button>
                    <div class="trust-body">
                        <div class="trust-wave">${trustWaveHTML(22)}</div>
                        <div class="trust-progress"></div>
                    </div>
                    <span class="trust-dur">0:00</span>
                    <audio preload="auto" src="${c.voice}"></audio>
                </div>
                <div class="trust-card-foot">
                    <span class="trust-stars">${trustStars(c.rating)}</span>
                    <span class="trust-project"><i class="fa-regular fa-folder-open"></i> ${c.project}</span>
                </div>
            </article>
        </div>`).join('');
    trustSlidesEl.querySelectorAll('.trust-player').forEach(bindTrustPlayer);
}

if (trustSlidesEl && typeof Swiper !== 'undefined') {
    renderTrustSlides();
    if (document.documentElement.dir === 'rtl') {
        const prevIcon = document.querySelector('.trust-prev i');
        const nextIcon = document.querySelector('.trust-next i');
        if (prevIcon) prevIcon.className = 'fa-solid fa-chevron-right';
        if (nextIcon) nextIcon.className = 'fa-solid fa-chevron-left';
    }
    trustSwiper = new Swiper('.trustSwiper', {
        slidesPerView: 1,
        spaceBetween: 18,
        grabCursor: true,
        keyboard: { enabled: true },
        pagination: { el: '.trust-pagination', clickable: true },
        navigation: { nextEl: '.trust-next', prevEl: '.trust-prev' },
        on: { slideChange() { window.pauseTrustVoice(); } },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// ============================================================
// FAQ — ACCORDION
// ============================================================
document.querySelectorAll('.faq-list').forEach(list => {
    list.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            list.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
});


// ============================================================
// CONTACT FORM ÔÇö SUBMIT HANDLER (Formspree + per-field validation + SweetAlert2)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('contactFormNote');
    if (!form) return;

    const lang = (document.documentElement.lang || 'en').toLowerCase();
    const T = lang.startsWith('ar') ? {
        required: '┘çÏ░Ïº Ïº┘äÏ¡┘é┘ä ┘àÏÀ┘ä┘êÏ¿',
        invalidEmail: '┘èÏ▒Ï¼┘ë ÏÑÏ»Ï«Ïº┘ä Ï¿Ï▒┘èÏ» ÏÑ┘ä┘âÏ¬Ï▒┘ê┘å┘è ÏÁÏ¡┘èÏ¡',
        sending: 'ÔÅ│ Ï¼ÏºÏ▒┘ì Ïº┘äÏÑÏ▒Ï│Ïº┘ä...',
        successTitle: 'Ï¬┘à ÏÑÏ▒Ï│Ïº┘ä Ï▒Ï│Ïº┘äÏ¬┘â Ï¿┘åÏ¼ÏºÏ¡!',
        successText: 'Ï│┘åÏ╣┘êÏ» ÏÑ┘ä┘è┘â ┘éÏ▒┘èÏ¿Ïº┘ï.',
        errorTitle: 'Ï¡Ï»Ï½ Ï«ÏÀÏú ┘àÏº',
        errorText: '┘èÏ▒Ï¼┘ë Ïº┘ä┘àÏ¡Ïº┘ê┘äÏ® ┘àÏ▒Ï® ÏúÏ«Ï▒┘ë.',
        networkTitle: 'Ï«ÏÀÏú ┘ü┘è Ïº┘äÏºÏ¬ÏÁÏº┘ä',
        networkText: 'Ï¬Ï¡┘é┘é ┘à┘å ÏºÏ¬ÏÁÏº┘ä┘â Ï¿Ïº┘äÏÑ┘åÏ¬Ï▒┘åÏ¬.'
    } : lang.startsWith('fr') ? {
        required: 'Ce champ est obligatoire',
        invalidEmail: 'Veuillez entrer un e-mail valide',
        sending: 'ÔÅ│ Envoi en cours...',
        successTitle: 'Message envoy├® avec succ├¿s !',
        successText: 'Nous vous r├®pondrons bient├┤t.',
        errorTitle: 'Une erreur est survenue',
        errorText: 'Veuillez r├®essayer.',
        networkTitle: 'Erreur r├®seau',
        networkText: 'V├®rifiez votre connexion.'
    } : {
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        sending: 'ÔÅ│ Sending...',
        successTitle: 'Message sent successfully!',
        successText: "We'll get back to you soon.",
        errorTitle: 'Something went wrong',
        errorText: 'Please try again.',
        networkTitle: 'Network error',
        networkText: 'Please check your connection.'
    };

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function getFieldErrorEl(input) {
        return input.parentElement.querySelector('.field-error');
    }

    function showFieldError(input, msg) {
        input.closest('.contact-field').classList.add('has-error');
        let err = getFieldErrorEl(input);
        if (!err) {
            err = document.createElement('span');
            err.className = 'field-error';
            input.parentElement.appendChild(err);
        }
        err.textContent = msg;
    }

    function clearFieldError(input) {
        input.closest('.contact-field').classList.remove('has-error');
        const err = getFieldErrorEl(input);
        if (err) err.remove();
    }

    const nameInput = document.getElementById('cf-name');
    const emailInput = document.getElementById('cf-email');
    const subjectInput = document.getElementById('cf-subject');
    const messageInput = document.getElementById('cf-message');

    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        if (!input) return;
        input.addEventListener('input', () => clearFieldError(input));
    });

    function validate() {
        let ok = true;
        [nameInput, emailInput, subjectInput, messageInput].forEach(clearFieldError);

        if (!nameInput.value.trim()) {
            showFieldError(nameInput, T.required);
            ok = false;
        }
        if (!emailInput.value.trim()) {
            showFieldError(emailInput, T.required);
            ok = false;
        } else if (!EMAIL_RE.test(emailInput.value.trim())) {
            showFieldError(emailInput, T.invalidEmail);
            ok = false;
        }
        if (subjectInput && !subjectInput.value.trim()) {
            showFieldError(subjectInput, T.required);
            ok = false;
        }
        if (!messageInput.value.trim()) {
            showFieldError(messageInput, T.required);
            ok = false;
        }
        return ok;
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (!validate()) {
            const firstErr = form.querySelector('.contact-field.has-error input, .contact-field.has-error textarea');
            if (firstErr) firstErr.focus();
            return;
        }

        note.textContent = T.sending;
        note.style.color = '#f59e0b';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                note.textContent = '';
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: T.successTitle,
                    text: T.successText,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#10b981'
                });
            } else {
                note.textContent = '';
                Swal.fire({
                    icon: 'error',
                    title: T.errorTitle,
                    text: T.errorText,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#ef4444'
                });
            }
        } catch {
            note.textContent = '';
            Swal.fire({
                icon: 'error',
                title: T.networkTitle,
                text: T.networkText,
                confirmButtonText: 'OK',
                confirmButtonColor: '#ef4444'
            });
        }
    });
});

// ============================================================
// TEAM ÔÇö SWIPER INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.team-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.team-slider .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.team-slider .swiper-button-next',
                prevEl: '.team-slider .swiper-button-prev',
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
            },
        });
    }
});

// ============================================================
// FOOTER ÔÇö UPDATE COPYRIGHT YEAR
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
