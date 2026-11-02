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

console.log('GM SOFT — Header & Hero (Simple Backgrounds + Orbs) loaded.');

// ============================================================
// WHAT WE BUILD — SWIPER INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.wwb-slider').forEach(function(sliderEl) {
            var nav = sliderEl.nextElementSibling;
            if (!nav || !nav.classList.contains('wwb-nav')) {
                nav = sliderEl.parentElement ? sliderEl.parentElement.querySelector('.wwb-nav') : null;
            }
            new Swiper(sliderEl, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: nav ? nav.querySelector('.wwb-pagination') : null,
                    clickable: true,
                },
                navigation: {
                    nextEl: nav ? nav.querySelector('.wwb-next') : null,
                    prevEl: nav ? nav.querySelector('.wwb-prev') : null,
                },
                breakpoints: {
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 28 },
                },
            });
        });
    }
});
const pageLang = document.documentElement.lang || 'en';


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
// PRESENCE — INTERACTIVE ALGERIA MAP (footprint)
// ============================================================
const presenceMeta = {
    "01": { latin: "Adrar", ar: "أدرار" },
    "02": { latin: "Chlef", ar: "الشلف" },
    "03": { latin: "Laghouat", ar: "الأغواط" },
    "04": { latin: "Oum El Bouaghi", ar: "أم البواقي" },
    "05": { latin: "Batna", ar: "باتنة" },
    "06": { latin: "Béjaïa", ar: "بجاية" },
    "07": { latin: "Biskra", ar: "بسكرة" },
    "08": { latin: "Béchar", ar: "بشار" },
    "09": { latin: "Blida", ar: "البليدة" },
    "10": { latin: "Bouira", ar: "البويرة" },
    "11": { latin: "Tamanrasset", ar: "تمنراست" },
    "12": { latin: "Tébessa", ar: "تبسة" },
    "13": { latin: "Tlemcen", ar: "تلمسان" },
    "14": { latin: "Tiaret", ar: "تيارت" },
    "15": { latin: "Tizi Ouzou", ar: "تيزي وزو" },
    "16": { latin: "Algiers", ar: "الجزائر" },
    "17": { latin: "Djelfa", ar: "الجلفة" },
    "18": { latin: "Jijel", ar: "جيجل" },
    "19": { latin: "Sétif", ar: "سطيف" },
    "20": { latin: "Saïda", ar: "سعيدة" },
    "21": { latin: "Skikda", ar: "سكيكدة" },
    "22": { latin: "Sidi Bel Abbès", ar: "سيدي بلعباس" },
    "23": { latin: "Annaba", ar: "عنابة" },
    "24": { latin: "Guelma", ar: "قالمة" },
    "25": { latin: "Constantine", ar: "قسنطينة" },
    "26": { latin: "Médéa", ar: "المدية" },
    "27": { latin: "Mostaganem", ar: "مستغانم" },
    "28": { latin: "M'Sila", ar: "المسيلة" },
    "29": { latin: "Mascara", ar: "معسكر" },
    "30": { latin: "Ouargla", ar: "ورقلة" },
    "31": { latin: "Oran", ar: "وهران" },
    "32": { latin: "El Bayadh", ar: "البيض" },
    "33": { latin: "Illizi", ar: "إليزي" },
    "34": { latin: "Bordj Bou Arréridj", ar: "برج بوعريريج" },
    "35": { latin: "Boumerdès", ar: "بومرداس" },
    "36": { latin: "El Tarf", ar: "الطارف" },
    "37": { latin: "Tindouf", ar: "تندوف" },
    "38": { latin: "Tissemsilt", ar: "تيسمسيلت" },
    "39": { latin: "El Oued", ar: "الوادي" },
    "40": { latin: "Khenchela", ar: "خنشلة" },
    "41": { latin: "Souk Ahras", ar: "سوق أهراس" },
    "42": { latin: "Tipaza", ar: "تيبازة" },
    "43": { latin: "Mila", ar: "ميلة" },
    "44": { latin: "Aïn Defla", ar: "عين الدفلى" },
    "45": { latin: "Naâma", ar: "النعامة" },
    "46": { latin: "Aïn Témouchent", ar: "عين تموشنت" },
    "47": { latin: "Ghardaïa", ar: "غرداية" },
    "48": { latin: "Relizane", ar: "غليزان" },
    "49": { latin: "Timimoun", ar: "تيميمون" },
    "50": { latin: "Bordj Badji Mokhtar", ar: "برج باجي مختار" },
    "51": { latin: "Ouled Djellal", ar: "أولاد جلال" },
    "52": { latin: "Béni Abbès", ar: "بني عباس" },
    "53": { latin: "In Salah", ar: "عين صالح" },
    "54": { latin: "In Guezzam", ar: "عين قزام" },
    "55": { latin: "Touggourt", ar: "تقرت" },
    "56": { latin: "Djanet", ar: "جانت" },
    "57": { latin: "El M'Ghair", ar: "المغير" },
    "58": { latin: "El Meniaa", ar: "المنيعة" },
    "59": { latin: "Aflou", ar: "أفلو" },
    "60": { latin: "El Abiodh Sidi Cheikh", ar: "الأبيض سيدي الشيخ" },
    "61": { latin: "El Aricha", ar: "العريشة" },
    "62": { latin: "El Kantara", ar: "القنطرة" },
    "63": { latin: "Barika", ar: "بريكة" },
    "64": { latin: "Bou Saâda", ar: "بوسعادة" },
    "65": { latin: "Bir El Ater", ar: "بئر العاتر" },
    "66": { latin: "Ksar El Boukhari", ar: "قصر البخاري" },
    "67": { latin: "Ksar Chellala", ar: "قصر الشلالة" },
    "68": { latin: "Aïn Oussara", ar: "عين وسارة" },
    "69": { latin: "M'saâd", ar: "مسعد" }
};

const presenceEN = {
    ui: {
        hqBadge: 'Our Team',
        coveredBadge: 'Projects delivered',
        startupBadge: 'Startup support',
        tipStartup: 'We help startup founders here',
        tipHq: 'Our team is based here',
        tipCovered: 'projects delivered',
        tipAvailable: 'Available nationwide — remote delivery',
        totalSuffix: '+',
        serviceLabels: ['Web', 'Mobile', 'AI', 'Desktop', 'UI/UX', 'Maintenance', 'Startups', 'Web Systems']
    },
    '28': { status: 'hq', projects: 8, types: [0, 7, 6], note: 'The GM SOFT team works from M’Sila — 8 projects delivered here: professional websites, web systems and startup products.' },
    '16': { status: 'startup', projects: null, types: [0, 2, 4, 6], note: 'Web platforms and AI solutions for clients in the capital — and support for startup founders.' },
    '31': { status: 'startup', projects: null, types: [0, 1, 6], note: 'Web and mobile projects for businesses in the west — and help for startup founders.' },
    '34': { status: 'startup', projects: null, types: [0, 3, 6], note: 'Web portals and desktop tools for local businesses — plus hands-on help for startup founders.' },
    '64': { status: 'covered', projects: 2, types: [0, 7], note: 'A professional website and a professional web system delivered in Bou Saâda.' },
    '10': { status: 'startup', projects: null, types: [6, 0], note: 'We help startup founders in Bouira turn ideas into real products.' },
    '14': { status: 'startup', projects: null, types: [6, 0], note: 'We help startup founders in Tiaret turn ideas into real products.' }
};

const presenceFR = {
    ui: {
        hqBadge: 'Notre équipe',
        coveredBadge: 'Projets livrés',
        startupBadge: 'Soutien aux startups',
        tipStartup: 'Nous accompagnons les porteurs de projets startup ici',
        tipHq: 'Notre équipe est basée ici',
        tipCovered: 'projets livrés',
        tipAvailable: 'Disponible partout — livraison à distance',
        totalSuffix: '+',
        serviceLabels: ['Web', 'Mobile', 'IA', 'Desktop', 'UI/UX', 'Maintenance', 'Startups', 'Systèmes web']
    },
    '28': { status: 'hq', projects: 8, types: [0, 7, 6], note: 'L’équipe GM SOFT travaille depuis M’Sila — 8 projets livrés ici : sites web professionnels, systèmes web et produits de startups.' },
    '16': { status: 'startup', projects: null, types: [0, 2, 4, 6], note: 'Plateformes web et solutions IA pour la capitale — et soutien aux porteurs de projets startup.' },
    '31': { status: 'startup', projects: null, types: [0, 1, 6], note: 'Projets web et mobiles pour les entreprises de l’ouest — et aide aux porteurs de projets startup.' },
    '34': { status: 'startup', projects: null, types: [0, 3, 6], note: 'Portails web et outils desktop pour les entreprises locales — et accompagnement des porteurs de projets startup.' },
    '64': { status: 'covered', projects: 2, types: [0, 7], note: 'Un site web professionnel et un système web professionnel livrés à Bou Saâda.' },
    '10': { status: 'startup', projects: null, types: [6, 0], note: 'Nous aidons les porteurs de projets startup de Bouira à transformer leurs idées en produits.' },
    '14': { status: 'startup', projects: null, types: [6, 0], note: 'Nous aidons les porteurs de projets startup de Tiaret à transformer leurs idées en produits.' }
};

const presenceAR = {
    ui: {
        hqBadge: 'فريقنا',
        coveredBadge: 'مشاريع منجزة',
        startupBadge: 'دعم الشركات الناشئة',
        tipStartup: 'نساعد هنا أصحاب المشاريع الناشئة',
        tipHq: 'هنا يقع فريقنا',
        tipCovered: 'مشاريع منجزة',
        tipAvailable: 'متاحة في كامل الجزائر — خدمة عن بُعد',
        totalSuffix: '+',
        serviceLabels: ['مواقع ويب', 'تطبيقات', 'ذكاء اصطناعي', 'برامج مكتبية', 'واجهات UI/UX', 'صيانة', 'شركات ناشئة', 'أنظمة ويب']
    },
    '28': { status: 'hq', projects: 8, types: [0, 7, 6], note: 'فريق GM SOFT يعمل من المسيلة — 8 مشاريع منجزة هنا: مواقع احترافية وأنظمة ويب ومنتجات لشركات ناشئة.' },
    '16': { status: 'startup', projects: null, types: [0, 2, 4, 6], note: 'منصات ويب وحلول ذكاء اصطناعي بالعاصمة — ودعم لأصحاب المشاريع الناشئة.' },
    '31': { status: 'startup', projects: null, types: [0, 1, 6], note: 'مشاريع ويب وتطبيقات لمؤسسات الغرب — ومساعدة لأصحاب المشاريع الناشئة.' },
    '34': { status: 'startup', projects: null, types: [0, 3, 6], note: 'بوابات وأدوات مكتبية للمؤسسات المحلية — ودعم لأصحاب المشاريع الناشئة.' },
    '64': { status: 'covered', projects: 2, types: [0, 7], note: 'موقع ويب احترافي ونظام ويب احترافي منجزان في بوسعادة.' },
    '10': { status: 'startup', projects: null, types: [6, 0], note: 'نساعد أصحاب المشاريع الناشئة في البويرة على تحويل أفكارهم إلى منتجات حقيقية.' },
    '14': { status: 'startup', projects: null, types: [6, 0], note: 'نساعد أصحاب المشاريع الناشئة في تيارت على تحويل أفكارهم إلى منتجات حقيقية.' }
};

(function () {
    const svg = document.querySelector('.wilaya-svg');
    if (!svg) return;

    const data = pageLang === 'fr' ? presenceFR : pageLang === 'ar' ? presenceAR : presenceEN;
    const ui = data.ui;
    const isAr = pageLang === 'ar';
    const svgWrap = svg.closest('.map-flex-svg');
    const tooltip = document.getElementById('mapTooltip');
    const tipCity = document.getElementById('tipCity');
    const tipDetail = document.getElementById('tipDetail');
    const sideEmpty = document.getElementById('sideEmpty');
    const sideDetail = document.getElementById('sideDetail');
    const sideBadge = document.getElementById('sideBadge');
    const sideName = document.getElementById('sideName');
    const sideCount = document.getElementById('sideCount');
    const sideServices = document.getElementById('sideServices');
    const sideNote = document.getElementById('sideNote');
    const directoryMini = document.getElementById('directoryMini');

    let totalProjects = 0;
    Object.keys(data).forEach(function (k) {
        if (k !== 'ui' && data[k].status === 'covered') totalProjects += data[k].projects;
    });

    let tipTimer = null;
    let rippleEl = null;

    function showTooltip(e, title, detail) {
        tipCity.textContent = title;
        tipDetail.textContent = detail;
        let left = e.clientX - 110;
        let top = e.clientY - 90;
        if (left < 10) left = 10;
        if (top < 10) top = 10;
        if (left + 220 > window.innerWidth) left = window.innerWidth - 230;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.classList.add('visible');
        clearTimeout(tipTimer);
    }
    function hideTooltip() {
        tipTimer = setTimeout(function () { tooltip.classList.remove('visible'); }, 150);
    }

    function placeRipple(e) {
        if (rippleEl) rippleEl.remove();
        const wrapRect = svgWrap.getBoundingClientRect();
        rippleEl = document.createElement('div');
        rippleEl.className = 'ripple-dot';
        rippleEl.style.left = (e.clientX - wrapRect.left) + 'px';
        rippleEl.style.top = (e.clientY - wrapRect.top) + 'px';
        svgWrap.appendChild(rippleEl);
    }

    function selectWilaya(code, e) {
        const info = data[code];
        if (!info) return;

        document.querySelectorAll('.wilaya-svg path').forEach(function (p) {
            p.classList.toggle('st-active', p.id === code);
        });
        document.querySelectorAll('.directory-mini button').forEach(function (b) {
            b.classList.toggle('active', b.dataset.code === code);
        });

        if (e) placeRipple(e);

        sideEmpty.style.display = 'none';
        sideDetail.classList.add('show');

        const meta = presenceMeta[code] || {};
        const isHQ = info.status === 'hq';
        const isStartup = info.status === 'startup';
        sideBadge.className = 'side-status-badge ' + (isHQ ? 'hq' : isStartup ? 'startup' : 'covered');
        sideBadge.textContent = isHQ ? ui.hqBadge : isStartup ? ui.startupBadge : ui.coveredBadge;
        sideName.textContent = isAr ? meta.ar : meta.latin;
        const statRow = document.getElementById('sideStatRow');
        if (statRow) statRow.style.display = info.projects == null ? 'none' : '';
        sideCount.textContent = String(info.projects);
        sideServices.innerHTML = info.types.map(function (t) {
            return '<span class="service-chip">' + ui.serviceLabels[t] + '</span>';
        }).join('');
        sideNote.textContent = info.note;
    }

    document.querySelectorAll('.wilaya-svg path').forEach(function (path) {
        const code = path.id;
        const meta = presenceMeta[code];
        if (!meta) return;
        const info = data[code];
        const name = isAr ? meta.ar : meta.latin;

        path.addEventListener('mousemove', function (e) {
            if (!info) showTooltip(e, name, ui.tipAvailable);
            else if (info.status === 'hq') showTooltip(e, name, info.projects + ' ' + ui.tipCovered + ' · ' + ui.tipHq);
            else if (info.status === 'startup') showTooltip(e, name, (info.projects != null ? info.projects + ' ' + ui.tipCovered + ' · ' : '') + ui.tipStartup);
            else showTooltip(e, name, info.projects + ' ' + ui.tipCovered);
        });
        path.addEventListener('mouseleave', hideTooltip);
        if (info) path.addEventListener('click', function (e) { selectWilaya(code, e); });
    });

    document.addEventListener('scroll', function () { tooltip.classList.remove('visible'); });

    Object.keys(data)
        .filter(function (k) { return k !== 'ui'; })
        .sort(function (a, b) {
            const aHQ = data[a].status === 'hq' ? 0 : 1;
            const bHQ = data[b].status === 'hq' ? 0 : 1;
            if (aHQ !== bHQ) return aHQ - bHQ;
            return (data[b].projects || 0) - (data[a].projects || 0);
        })
        .forEach(function (code) {
            const meta = presenceMeta[code] || {};
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.code = code;
            btn.textContent = isAr ? meta.ar : meta.latin;
            btn.addEventListener('click', function (e) { selectWilaya(code, e); });
            directoryMini.appendChild(btn);
        });
})();

// ============================================================
// CONTACT FORM — SUBMIT HANDLER (Formspree + per-field validation + SweetAlert2)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('contactFormNote');
    if (!form) return;

    const lang = (document.documentElement.lang || 'en').toLowerCase();
    const T = lang.startsWith('ar') ? {
        required: 'هذا الحقل مطلوب',
        invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
        sending: '⏳ جارٍ الإرسال...',
        successTitle: 'تم إرسال رسالتك بنجاح!',
        successText: 'سنعود إليك قريباً.',
        errorTitle: 'حدث خطأ ما',
        errorText: 'يرجى المحاولة مرة أخرى.',
        networkTitle: 'خطأ في الاتصال',
        networkText: 'تحقق من اتصالك بالإنترنت.'
    } : lang.startsWith('fr') ? {
        required: 'Ce champ est obligatoire',
        invalidEmail: 'Veuillez entrer un e-mail valide',
        sending: '⏳ Envoi en cours...',
        successTitle: 'Message envoyé avec succès !',
        successText: 'Nous vous répondrons bientôt.',
        errorTitle: 'Une erreur est survenue',
        errorText: 'Veuillez réessayer.',
        networkTitle: 'Erreur réseau',
        networkText: 'Vérifiez votre connexion.'
    } : {
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        sending: '⏳ Sending...',
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
// FOOTER — UPDATE COPYRIGHT YEAR
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});