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
// CLIENT MESSAGES — DATA & LOGIC
// ============================================================

// ----- بيانات العملاء والمحادثات (حسب اللغة) -----
const pageLang = document.documentElement.lang || 'en';

const messagesEN = [
    {
        name: 'Nabil Saouchi',
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
        preview: 'Bro... this is on another level 🔥',
        messages: [
            { who: 'them', text: "Bro... this is on another level 🔥 I seriously don't know what to say." },
            { who: 'me', text: "😂 I'm really glad you liked it, bro." },
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
        name: 'Nabil Saouchi',
        initials: 'N',
        color: '#2f5c46',
        platform: 'WhatsApp',
        pcolor: '#3fce6a',
        time: '14:14',
        preview: 'Franchement, je suis impressionné par le site...',
        messages: [
            { who: 'them', text: "Hé Moumen, franchement je suis impressionné. Le site est encore mieux que ce que j'avais imaginé." },
            { who: 'me', text: "Merci beaucoup ! Je suis vraiment ravi de l'entendre." },
            { who: 'them', text: "L'interface est premium, c'est incroyablement fluide, et tout charge rapidement." },
            { who: 'me', text: "J'ai passé beaucoup de temps à optimiser chaque détail pour la meilleure expérience." },
            { who: 'them', text: "Tu as vraiment tout déchiré. Je te recommanderai certainement à quiconque cherche un développeur." }
        ]
    },
    {
        name: 'Mariam',
        initials: 'M',
        color: '#5c2f4a',
        platform: 'Instagram DM',
        pcolor: '#e05a86',
        time: '14:18',
        preview: 'Je ne m\'attendais pas à ce que ce soit aussi beau...',
        messages: [
            { who: 'them', text: "Salut Moumen ! Je n'honnêtement pas attendu que le résultat final soit aussi beau." },
            { who: 'me', text: "Cela compte vraiment pour moi. Merci !" },
            { who: 'them', text: "Tout est moderne, élégant et très professionnel." },
            { who: 'me', text: "Je suis content que tu aies remarqué les petits détails. Ils font une énorme différence." },
            { who: 'them', text: "Merci beaucoup pour ton travail acharné. Cela a dépassé toutes mes attentes." }
        ]
    },
    {
        name: 'Brahim RDX',
        initials: 'B',
        color: '#2b4f7a',
        platform: 'Telegram',
        pcolor: '#3ea8e0',
        time: '14:21',
        preview: 'Franchement... c\'est un autre niveau 🔥',
        messages: [
            { who: 'them', text: "Franchement... c'est un autre niveau 🔥 Je ne sais vraiment pas quoi dire." },
            { who: 'me', text: "😂 Je suis vraiment content que ça te plaise, frère." },
            { who: 'them', text: "Les animations, les couleurs, l'expérience globale... tout est à un niveau mondial." },
            { who: 'me', text: "C'était exactement le but. Je voulais que ce soit unique." },
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
            { who: 'me', text: "Avec plaisir ! C'était un vrai plaisir de travailler avec toi." },
            { who: 'them', text: "Ta communication était excellente du début à la fin, et la qualité est exceptionnelle." },
            { who: 'me', text: "J'essaie toujours de fournir la meilleure expérience possible." },
            { who: 'them', text: "Continue comme ça. Tu vas construire une réputation incroyable." }
        ]
    }
];

const messagesAR = [

    {
        name: 'Nabil Saouchi',
        initials: 'N',
        color: '#2f5c46',
        platform: 'WhatsApp',
        pcolor: '#3fce6a',
        time: '14:14',
        preview: 'صراحة السيت فاق التوقعات...',
        messages: [
            { who: 'them', text: "سلام مومن، صراحة اخي يعطيك الصحة السيت فاق التوقعات . النتيجة هايلة بزاف." },
            { who: 'me', text: "الله يحفظك  خويا، فرحتني بزاف كي شفتو عجبك." },
            { who: 'them', text: "الديزاين  بزاف هارب وكل حاجة باينة في بلاصتها وما كاين حتى حاجة زايدة." },
            { who: 'me', text: "الحمد لله اخي خرج كيما حابو نتا هدا هو الهدف نتاعنا حنا ." },
            { who: 'them', text: "فري شكرا ليك وليكيب كاملة  خدمة جد متقونة ربي يبارك . واي شخص  حاب يخدم  نوصي بيك." }
        ]
    },

    {
        name: 'Mariam',
        initials: 'M',
        color: '#5c2f4a',
        platform: 'Instagram DM',
        pcolor: '#e05a86',
        time: '14:18',
        preview: 'النتيجة خرجت خير من اللي توقعت...',
        messages: [
            { who: 'them', text: "سلام اخي ! شفت الموقع كامل، بصراحة النتيجة خرجت خير من اللي كنت متوقعة متامنش شحال راني فرحانة 😭." },
            { who: 'me', text: "الحمد لله، هذا هو الهدف لي كنا حابين نوصلولو." },
            { who: 'them', text: "عجبني بزاف كيفاش رتبت المحتوى، خاصة تصميم  بزاف عجبني . جاو احترافي وماشي مبالغ فيهم." },
            { who: 'me', text: "  الحمد لله كي عجبك اي استفسار مرحبا بيك في اي وقت." },
            { who: 'them', text: "بصراحة شكرا بزاف فريق نتاعكم احترافي ومحترم   شكرا  ." }
        ]
    },

    {
        name: 'Brahim RDX',
        initials: 'B',
        color: '#2b4f7a',
        platform: 'Telegram',
        pcolor: '#3ea8e0',
        time: '14:21',
        preview: 'خويا هذا مستوى آخر 🔥',
        messages: [
            { who: 'them', text: "خويا شفت الموقع... هذا مستوى آخر 🔥 بصراحة ما كنتش نتوقع يخرج هكذا." },
            { who: 'me', text: "😂 يعطيك الصحة، فرحت بزاف كي عجبك." },
            { who: 'them', text: "الحركات، الألوان، طريقة عرض المعلومات وحتى التفاصيل الصغيرة... كلشي خدام مع بعضاه." },
            { who: 'me', text: "هذا بالضبط لي كنت حاب نحققو، تجربة تكون مختلفة على المواقع العادية." },
            { who: 'them', text: "بلا مجاملة، من أحسن مواقع البورتفوليو لي شفتهم. كملو بنفس المستوى مزيد من توفيق ان شاء الله 🔥" }
        ]
    },

    {
        name: 'Ilyes OX',
        initials: 'I',
        color: '#3a3a68',
        platform: 'Discord',
        pcolor: '#8b7bf0',
        time: '14:24',
        preview: 'خدمة نظيفة بزاف، يعطيك الصحة...',
        messages: [
            { who: 'them', text: "يعطيك الصحة خويا مومن، الخدمة خرجت كيما تفاهمنا  ." },
            { who: 'me', text: "الحمد لله  خويا، كان من شرف ليا نتعامل  معاك." },
            { who: 'them', text: "بالنسبة فقط فورماسيو نتاع لي كيب وكتا ان شاء الله  ." },
            { who: 'me', text: "يمكن هدا اسبوع ادا جيت انا ولا   يجبك شخص اخر من فريق يعني كون متنهي ." },
            { who: 'them', text: "اخويا مريقلة يعيط صحة  ماشاء الله   مصغر وطيرو ربي يبارك. إن شاء الله تكون بيناتنا مشاريع أخرى." }
        ]
    }

];
const conversations = pageLang === 'fr' ? messagesFR : pageLang === 'ar' ? messagesAR : messagesEN;

// ----- عناصر DOM -----
const msgList = document.getElementById('msg-list');
const threadBody = document.getElementById('thread-body');
const liveBadge = document.getElementById('live-badge');
const threadInput = document.getElementById('thread-input');
const sendBtn = document.getElementById('thread-send');
const voiceBtn = document.getElementById('gm-voice-btn');
const voiceStatus = document.getElementById('voice-status');
const inboxLabel = pageLang === 'fr' ? 'Boîte de réception —' : pageLang === 'ar' ? 'صندوق الوارد —' : 'Inbox —';
const convLabel = pageLang === 'fr' ? 'conversations' : pageLang === 'ar' ? 'محادثات' : 'conversations';
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
        voiceStatus.textContent = '⚠️ Voice input not supported';
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
        voiceStatus.textContent = '🎤 Listening... Speak now';
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
            voiceStatus.textContent = '🚫 Microphone access denied';
        } else {
            voiceStatus.textContent = `⚠️ Error: ${event.error}`;
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
        voiceStatus.textContent = '⏹️ Stopped';
        setTimeout(() => { voiceStatus.textContent = ''; }, 1000);
    } else {
        startListening();
    }
});

// ----- إعدادات المحادثة التلقائية -----
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
        liveBadge.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Manual — click to resume';
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

// ----- بناء قائمة العملاء -----
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

// ----- إرسال الرسائل (يدوياً أو بالصوت) -----
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
        voiceStatus.textContent = '✅ Voice message sent!';
        voiceStatus.className = 'voice-status success';
        setTimeout(() => { voiceStatus.className = 'voice-status'; voiceStatus.textContent = ''; }, 2000);
    } else {
        bubble.textContent = val;
    }
    threadBody.appendChild(bubble);
    threadInput.value = '';
    threadBody.scrollTop = threadBody.scrollHeight;

    // رد تلقائي من العميل (محاكاة)
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

// ----- أحداث الحقل -----
sendBtn.addEventListener('click', () => sendMessage(false));
threadInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage(false);
});

// ----- إعادة التشغيل التلقائي عند النقر على الشارة -----
liveBadge.addEventListener('click', () => {
    if (!autoplayOn) {
        startAutoplay(currentConvIndex);
    }
});

// ----- تهيئة الساعة -----
function tickClock() {
    const d = new Date();
    const label = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    document.querySelectorAll('.clock').forEach(el => el.textContent = label);
}
tickClock();
setInterval(tickClock, 15000);

// ----- تهيئة الصوت والمحادثة التلقائية -----
initVoice();
startAutoplay(0);
console.log('GM SOFT — Client Messages with Voice Input loaded.');

// ============================================================
// CONTACT FORM — SUBMIT HANDLER (Formspree)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('contactFormNote');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('cf-name').value.trim();
            const email = document.getElementById('cf-email').value.trim();
            const message = document.getElementById('cf-message').value.trim();

            if (!name || !email || !message) {
                note.textContent = '⚠️ Please fill in all required fields.';
                note.style.color = '#ef4444';
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                note.textContent = '⚠️ Please enter a valid email address.';
                note.style.color = '#ef4444';
                return;
            }

            note.textContent = '⏳ Sending...';
            note.style.color = '#f59e0b';

            try {
                const data = new FormData(form);
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    note.textContent = '✅ Message sent successfully! We\'ll get back to you soon.';
                    note.style.color = '#10b981';
                    form.reset();
                } else {
                    note.textContent = '❌ Something went wrong. Please try again.';
                    note.style.color = '#ef4444';
                }
            } catch {
                note.textContent = '❌ Network error. Please check your connection.';
                note.style.color = '#ef4444';
            }
        });
    }
});

// ============================================================
// TEAM — SWIPER INITIALIZATION
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
// FOOTER — UPDATE COPYRIGHT YEAR
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});