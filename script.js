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

// ============================================================
// CLIENT MESSAGES — DATA & LOGIC
// ============================================================

// ----- بيانات العملاء والمحادثات (حسب اللغة) -----
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
        name: 'Dizayno DZ',
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
        name: 'Dizayno DZ',
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
// WORK SECTION — DESKTOP FINDER PORTFOLIO (ANONYMIZED / NDA)
// ============================================================
(function () {
    if (!document.getElementById('work')) return;

    var wl = (document.documentElement.lang || 'en').toLowerCase();
    var WT = {
        en: {
            brandCrumb: 'Portfolio /', brand: 'Work',
            available: 'Available for work',
            caption: 'Portfolio / Work — click a folder to open',
            folders: 'Folders',
            all: 'All Projects', website: 'Websites', webapp: 'Web Apps', desktop: 'Desktop Apps', mpss: 'Business Systems',
            itemWord: 'item', itemWordPlural: 'items',
            preview: 'Request case study', close: 'Close',
            viewGrid: 'Grid view', viewList: 'List view',
            ribbon: 'CONFIDENTIAL',
            caseTitle: 'Case Study \u2014 Confidential',
            caseHtml: 'We don\u2019t showcase full project details publicly to protect our clients\u2019 privacy.<br><b>Contact us</b> \u2014 we\u2019ll walk you through relevant work at every level.',
            caseConfirm: 'Contact us', caseCancel: 'Close'
        },
        fr: {
            brandCrumb: 'Portfolio /', brand: 'Travaux',
            available: 'Disponible pour des projets',
            caption: 'Portfolio / Travaux \u2014 cliquez sur un dossier pour l\u2019ouvrir',
            folders: 'Dossiers',
            all: 'Tous les projets', website: 'Sites web', webapp: 'Apps web', desktop: 'Apps bureau', mpss: 'Syst\u00e8mes m\u00e9tier',
            itemWord: '\u00e9l\u00e9ment', itemWordPlural: '\u00e9l\u00e9ments',
            preview: 'Demander une \u00e9tude de cas', close: 'Fermer',
            viewGrid: 'Vue grille', viewList: 'Vue liste',
            ribbon: 'SOUS NDA',
            caseTitle: '\u00c9tude de cas \u2014 Confidentiel',
            caseHtml: 'Nous ne publions pas les d\u00e9tails complets des projets afin de prot\u00e9ger la confidentialit\u00e9 de nos clients.<br><b>Contactez-nous</b> \u2014 nous vous pr\u00e9senterons des r\u00e9alisations pertinentes \u00e0 tous les niveaux.',
            caseConfirm: 'Nous contacter', caseCancel: 'Fermer'
        },
        ar: {
            brandCrumb: '\u0627\u0644\u0623\u0644\u0639\u0645\u0627\u062f /', brand: '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
            available: '\u0645\u062a\u0627\u062d \u0644\u0644\u0639\u0645\u0644',
            caption: '\u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u2014 \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0645\u062c\u0644\u062f \u0644\u0641\u062a\u062d\u0647',
            folders: '\u0627\u0644\u0645\u062c\u0644\u062f\u0627\u062a',
            all: '\u0643\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644', website: '\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628', webapp: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0648\u064a\u0628', desktop: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062d\u0627\u0633\u0648\u0628', mpss: '\u0623\u0646\u0638\u0645\u0629 \u0623\u0639\u0645\u0627\u0644 \u062a\u062c\u0627\u0631\u064a\u0629',
            itemWord: '\u0639\u0646\u0635\u0631', itemWordPlural: '\u0639\u0646\u0627\u0635\u0631',
            preview: '\u0637\u0644\u0628 \u062f\u0631\u0627\u0633\u0629 \u062d\u0627\u0644\u0629', close: '\u0625\u063a\u0644\u0627\u0642',
            viewGrid: '\u0639\u0631\u0636 \u0634\u0628\u0643\u064a', viewList: '\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629',
            ribbon: '\u0633\u0631\u064a',
            caseTitle: '\u062f\u0631\u0627\u0633\u0629 \u062d\u0627\u0644\u0629 \u2014 \u0633\u0631\u064a',
            caseHtml: '\u0646\u062d\u0641\u0636 \u0639\u0644\u0649 \u0639\u0631\u0636 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062a \u0628\u0634\u0643\u0644 \u0639\u0627\u0645 \u062d\u0641\u0627\u0638\u0627\u064b \u0639\u0644\u0649 \u062e\u0635\u0648\u0635\u064a\u0629 \u0639\u0645\u0644\u0627\u0626\u0646\u0627.<br><b>\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627</b> \u2014 \u0633\u0646\u0639\u0631\u0636\u0643 \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0639\u0646\u062f \u0643\u0644 \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a.',
            caseConfirm: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627', caseCancel: '\u0625\u063a\u0644\u0627\u0642'
        }
    };
    var T = WT[wl] || WT.en;
    var L = (T === WT.ar) ? 'ar' : (T === WT.fr) ? 'fr' : 'en';
    var itemsLabel = function (n) { return '\u2014 ' + n + ' ' + (n !== 1 ? T.itemWordPlural : T.itemWord); };
    var itemsShort = function (n) { return n + ' ' + (n !== 1 ? T.itemWordPlural : T.itemWord); };
    var brandHTML = function (crumb, name) { return '<span class="crumb">' + crumb + '</span> ' + name; };
    var defaultBrand = brandHTML(T.brandCrumb, T.brand);

    var ic = function (c) { return '<i class="fa-solid fa-' + c + '"></i>'; };

    var FOLDERS = [
        { id: 'all', name: T.all, icon: ic('folder-open'), color: '#c9a53a', badge: 14, dockIcon: ic('folder-open') },
        { id: 'website', name: T.website, icon: ic('earth'), color: '#0ea5e9', badge: 8, dockIcon: ic('earth') },
        { id: 'webapp', name: T.webapp, icon: ic('globe'), color: '#2ecc71', badge: 1, dockIcon: ic('globe') },
        { id: 'desktop', name: T.desktop, icon: ic('desktop'), color: '#3a6bd6', badge: 4, dockIcon: ic('desktop') },
        { id: 'mpss', name: T.mpss, icon: ic('layer-group'), color: '#8b5cf6', badge: 1, dockIcon: ic('layer-group') }
    ];

    var PROJECTS = [
        { t: { en: 'Interactive 3D Product Site', fr: 'Site produit 3D interactif', ar: '\u0645\u0648\u0642\u0639 \u062a\u0641\u0627\u0639\u0644\u064a \u062b\u0644\u0627\u062b\u064a \u0627\u0644\u0628\u0639\u062f' },
            s: { en: 'Entertainment', fr: 'Divertissement', ar: '\u062a\u0631\u0641\u064a\u0647' },
            tech: 'Three.js \u00b7 WebGL', year: 2026, cat: 'website', color: '#e50914', icon: ic('robot') },
        { t: { en: 'Restaurant Ordering Website', fr: 'Site de commande \u2014 restaurant', ar: '\u0645\u0648\u0642\u0639 \u0637\u0644\u0628 \u0623\u0643\u0644 \u0644\u0645\u0637\u0639\u0645' },
            s: { en: 'Food & Beverage', fr: 'Restauration', ar: '\u0627\u0644\u0645\u0637\u0639\u0645 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a' },
            tech: 'HTML \u00b7 CSS \u00b7 JS', year: 2026, cat: 'website', color: '#ff4d00', icon: ic('burger') },
        { t: { en: 'Streaming Catalog Platform', fr: 'Plateforme de catalogues streaming', ar: '\u0645\u0646\u0635\u0629 \u0645\u062d\u062a\u0648\u0627\u0629 \u0628\u062b' },
            s: { en: 'Media & Entertainment', fr: 'M\u00e9dias', ar: '\u0627\u0644\u0625\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u062a\u0631\u0641\u064a\u0647' },
            tech: 'React \u00b7 REST API', year: 2026, cat: 'website', color: '#e50914', icon: ic('film') },
        { t: { en: 'Premium Restaurant Website', fr: 'Site restaurant premium', ar: '\u0645\u0648\u0642\u0639 \u0645\u0637\u0639\u0645 \u0641\u0627\u062e\u0631' },
            s: { en: 'Food & Beverage', fr: 'Restauration', ar: '\u0627\u0644\u0645\u0637\u0639\u0645 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a' },
            tech: 'Landing \u00b7 Responsive', year: 2026, cat: 'website', color: '#d4a017', icon: ic('utensils') },
        { t: { en: 'Bakery & Desserts Website', fr: 'Site pâtisserie', ar: '\u0645\u0648\u0642\u0639 \u062d\u0644\u0648\u064a\u0627\u062a' },
            s: { en: 'Retail', fr: 'Commerce', ar: '\u0627\u0644\u062a\u062c\u0627\u0631\u0629' },
            tech: 'Landing \u00b7 Responsive', year: 2026, cat: 'website', color: '#e91e8c', icon: ic('cake-candles') },
        { t: { en: 'Specialty Coffee Brand Website', fr: 'Site de torréfaction artisanale', ar: '\u0645\u0648\u0642\u0639 \u0642\u0647\u0648\u0629 \u0645\u062e\u0635\u0635\u0629' },
            s: { en: 'Food & Beverage', fr: 'Restauration', ar: '\u0627\u0644\u0645\u0637\u0639\u0645 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a' },
            tech: 'Landing \u00b7 SEO', year: 2026, cat: 'website', color: '#3d2314', icon: ic('mug-hot') },
        { t: { en: 'Fashion E-commerce Website', fr: 'Boutique mode en ligne', ar: '\u0645\u062a\u062c\u0631 \u0623\u0644\u0648\u0627\u0646 \u0645\u0648\u0627\u0644' },
            s: { en: 'Retail', fr: 'Commerce', ar: '\u0627\u0644\u062a\u062c\u0627\u0631\u0629' },
            tech: 'E-commerce \u00b7 CMS', year: 2026, cat: 'website', color: '#c41e3a', icon: ic('shirt') },
        { t: { en: 'Healthcare Management Platform', fr: 'Plateforme de gestion \u2014 santé', ar: '\u0645\u0646\u0635\u0629 \u0625\u062f\u0627\u0631\u0629 \u0635\u062d\u064a\u0629' },
            s: { en: 'Healthcare', fr: 'Sant\u00e9', ar: '\u0627\u0644\u0635\u062d\u0629' },
            tech: 'Full-stack \u00b7 Multi-role', year: 2026, cat: 'mpss', color: '#10b981', icon: ic('hospital') },
        { t: { en: 'Arabic Lexicon Web App', fr: 'Application lexicale arabe', ar: '\u062a\u0637\u0628\u064a\u0642 \u0645\u0639\u062c\u0645 \u0639\u0631\u0628\u064a' },
            s: { en: 'Education & Culture', fr: 'Éducation', ar: '\u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u062ab\u0627\u0642\u0627\u0641\u0629' },
            tech: 'Web App \u00b7 Search', year: 2026, cat: 'webapp', color: '#2ecc71', icon: ic('book-open') },
        { t: { en: 'Medical Practice Management', fr: 'Gestion de cabinet médical', ar: '\u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0639\u064a\u0627\u062f\u0629 \u0637\u0628\u064a\u0629' },
            s: { en: 'Healthcare', fr: 'Sant\u00e9', ar: '\u0627\u0644\u0635\u062d\u0629' },
            tech: 'Electron \u00b7 SQLite \u00b7 Offline', year: 2025, cat: 'desktop', color: '#1a8a6a', icon: ic('laptop-medical') },
        { t: { en: 'Perfume Store Management', fr: 'Gestion de parfumerie', ar: '\u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0639\u062a\u0628\u0629' },
            s: { en: 'Retail', fr: 'Commerce', ar: '\u0627\u0644\u062a\u062c\u0627\u0631\u0629' },
            tech: 'Electron \u00b7 POS \u00b7 Offline', year: 2025, cat: 'desktop', color: '#c49a3a', icon: ic('bottle-droplet') },
        { t: { en: 'Eyewear Retail Management', fr: 'Gestion de magasin d\u2019optique', ar: '\u0646\u0638\u0627\u0645 \u0645\u062a\u062c\u0631 \u0646\u0638\u0627\u0641\u0627\u062a' },
            s: { en: 'Retail', fr: 'Commerce', ar: '\u0627\u0644\u062a\u062c\u0627\u0631\u0629' },
            tech: 'Electron \u00b7 Inventory', year: 2025, cat: 'desktop', color: '#4a7ad6', icon: ic('glasses') },
        { t: { en: 'Childcare Center Management', fr: 'Gestion de crèche', ar: '\u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0645\u0631\u062a\u0639\u0629' },
            s: { en: 'Education', fr: '\u00c9ducation', ar: '\u0627\u0644\u062a\u0631\u0628\u064a\u0629' },
            tech: 'Electron \u00b7 Reports', year: 2025, cat: 'desktop', color: '#e06a9a', icon: ic('children') },
        { t: { en: 'Luxury 3D Product Showcase', fr: 'Vitrine 3D \u2014 produit de luxe', ar: '\u0639\u0631\u0648\u062f\u0629 \u062b\u0644\u0627\u062b\u064a\u0629 \u0627\u0644\u0628\u0639\u062f \u0644\u0645\u0646\u062a\u062c\u0627\u062a' },
            s: { en: 'Jewelry & Watches', fr: 'Joaillerie', ar: '\u0627\u0644\u0623\u0644\u0648\u0627\u062b \u0648\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u0630' },
            tech: 'Three.js \u00b7 WebGL', year: 2026, cat: 'website', color: '#C9A05C', icon: ic('clock') }
    ];
    PROJECTS.forEach(function (p) { p.title = p.t[L] + ' \u2014 ' + p.s[L]; p.sub = p.tech + ' \u00b7 ' + p.year; });

    var currentCat = 'all';
    var viewMode = 'grid';

    var iconGrid = document.getElementById('icon-grid');
    var fwSidebar = document.getElementById('fw-sidebar');
    var fwGrid = document.getElementById('fw-grid');
    var finderWindow = document.getElementById('finder-window');
    var desktopLayer = document.getElementById('desktop-layer');
    var mbBrand = document.getElementById('mb-brand');
    var dock = document.getElementById('dock');

    function projectsFor(cat) {
        return cat === 'all' ? PROJECTS : PROJECTS.filter(function (p) { return p.cat === cat; });
    }

    FOLDERS.forEach(function (f) {
        var el = document.createElement('div');
        el.className = 'desk-folder';
        el.innerHTML = '<div class="ficon" style="background:' + f.color + '">' + f.icon +
            (f.badge ? '<span class="fbadge">' + f.badge + '</span>' : '') + '</div>' +
            '<div class="fname">' + f.name.toUpperCase() + '</div>';
        el.addEventListener('click', function () { openFinder(f.id, el); });
        iconGrid.appendChild(el);
    });

    FOLDERS.forEach(function (f) {
        var el = document.createElement('div');
        el.className = 'dock-icon';
        el.dataset.cat = f.id;
        el.title = f.name;
        el.innerHTML = f.dockIcon;
        el.addEventListener('click', function () {
            if (finderWindow.classList.contains('open') && currentCat === f.id) {
                closeFinder();
            } else if (finderWindow.classList.contains('open')) {
                switchFolder(f.id);
                updateDockActive();
            } else {
                openFinder(f.id, el);
                updateDockActive();
            }
        });
        dock.appendChild(el);
    });

    function updateDockActive() {
        document.querySelectorAll('.dock-icon').forEach(function (d) {
            d.classList.toggle('active', finderWindow.classList.contains('open') && d.dataset.cat === currentCat);
        });
    }

    fwSidebar.insertAdjacentHTML('afterbegin', '<div class="fw-sidebar-label">' + T.folders + '</div>');
    FOLDERS.forEach(function (f) {
        var el = document.createElement('div');
        el.className = 'fw-side-item' + (f.id === 'all' ? ' active' : '');
        el.dataset.cat = f.id;
        el.innerHTML = '<span class="sic">' + f.icon + '</span><span>' + f.name + '</span><span class="scount">' + f.badge + '</span>';
        el.addEventListener('click', function () { switchFolder(f.id); updateDockActive(); });
        fwSidebar.appendChild(el);
    });

    function openCaseModal() {
        if (typeof Swal === 'undefined') {
            alert(T.caseTitle + '\n\n' + T.caseHtml.replace(/<br>/g, '\n').replace(/<[^>]+>/g, ''));
            return;
        }
        Swal.fire({
            icon: 'info',
            title: T.caseTitle,
            html: T.caseHtml,
            showCancelButton: true,
            confirmButtonText: T.caseConfirm,
            cancelButtonText: T.caseCancel,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#555',
            background: '#18181c',
            color: '#f2f2f4'
        }).then(function (r) {
            if (r.isConfirmed) {
                setTimeout(function () {
                    var c = document.getElementById('contact');
                    if (c) c.scrollIntoView({ behavior: 'smooth' });
                }, 450);
            }
        });
    }

    function renderGrid(cat) {
        fwGrid.innerHTML = '';
        var list = projectsFor(cat);
        list.forEach(function (p, i) {
            var c = document.createElement('div');
            c.className = 'card';
            c.style.animationDelay = (i * 35) + 'ms';
            c.innerHTML = '<div class="thumb nda" style="--nda-c:' + p.color + '">' +
                '<i class="fa-solid fa-lock nda-lock"></i>' +
                '<span class="nda-ribbon">' + T.ribbon + '</span></div>' +
                '<div class="meta"><div class="ctitle">' + p.title + '</div>' +
                '<div class="csub">' + p.sub + '</div></div>';
            c.addEventListener('contextmenu', function (e) { e.preventDefault(); openContextMenu(e, p); });
            c.addEventListener('click', function () { openCaseModal(); });
            fwGrid.appendChild(c);
        });
    }

    function switchFolder(cat) {
        if (cat === currentCat) return;
        currentCat = cat;
        var f = FOLDERS.find(function (x) { return x.id === cat; });

        document.querySelectorAll('.fw-side-item').forEach(function (x) { x.classList.toggle('active', x.dataset.cat === cat); });

        var spinner = document.getElementById('fw-spinner');
        spinner.classList.add('show');
        fwGrid.classList.add('loading');

        setTimeout(function () {
            renderGrid(cat);
            document.getElementById('fw-title-icon').innerHTML = f.icon;
            document.getElementById('fw-title-text').textContent = f.name;
            document.getElementById('crumb-icon').innerHTML = f.icon;
            document.getElementById('crumb-name').textContent = f.name;
            var n = projectsFor(cat).length;
            document.getElementById('crumb-count').textContent = itemsLabel(n);
            document.getElementById('status-count').textContent = itemsShort(n);
            document.getElementById('status-crumb').textContent = '\u25a0 ' + f.name;
            mbBrand.innerHTML = brandHTML(T.brandCrumb, f.name);
            spinner.classList.remove('show');
            fwGrid.classList.remove('loading');
            closeContextMenu();
            updateDockActive();
        }, 260);
    }

    function openFinder(cat, iconEl) {
        var stage = document.getElementById('stage');
        var stageRect = stage.getBoundingClientRect();
        var iconRect = iconEl.getBoundingClientRect();
        var ox = ((iconRect.left + iconRect.width / 2) - stageRect.left) / stageRect.width * 100;
        var oy = ((iconRect.top + iconRect.height / 2) - stageRect.top) / stageRect.height * 100;
        finderWindow.style.transformOrigin = ox + '% ' + oy + '%';
        desktopLayer.classList.add('dimmed');
        finderWindow.classList.add('open');
        currentCat = null;
        switchFolder(cat);
    }

    function closeFinder() {
        finderWindow.classList.remove('open');
        desktopLayer.classList.remove('dimmed');
        mbBrand.innerHTML = defaultBrand;
        closeContextMenu();
        updateDockActive();
    }
    document.getElementById('fw-close').addEventListener('click', closeFinder);

    document.getElementById('view-grid').addEventListener('click', function () {
        viewMode = 'grid';
        fwGrid.classList.remove('list');
        document.getElementById('view-grid').classList.add('active');
        document.getElementById('view-list').classList.remove('active');
    });
    document.getElementById('view-list').addEventListener('click', function () {
        viewMode = 'list';
        fwGrid.classList.add('list');
        document.getElementById('view-list').classList.add('active');
        document.getElementById('view-grid').classList.remove('active');
    });

    var ctxMenu = document.getElementById('ctx-menu');

    function openContextMenu(e, project) {
        e.preventDefault && e.preventDefault();
        var bodyRect = document.querySelector('.fw-body').getBoundingClientRect();
        var x = Math.max(6, Math.min(e.clientX - bodyRect.left, bodyRect.width - 216));
        var y = Math.max(6, Math.min(e.clientY - bodyRect.top, bodyRect.height - 140));
        ctxMenu.style.left = x + 'px';
        ctxMenu.style.top = y + 'px';
        ctxMenu.innerHTML = '<div class="ctx-head"><div class="cthumb nda" style="background:linear-gradient(145deg, ' + project.color + ', #0d0d10)">' +
            '<i class="fa-solid fa-lock"></i></div>' +
            '<div class="cinfo"><div class="n">' + project.title + '</div></div></div>' +
            '<div class="ctx-item" data-a="preview"><i class="fa-solid fa-file-shield"></i> ' + T.preview + '</div>' +
            '<div class="ctx-sep"></div>' +
            '<div class="ctx-item danger" data-a="close"><i class="fa-solid fa-xmark"></i> ' + T.close + '</div>';
        ctxMenu.classList.add('show');
        ctxMenu.querySelectorAll('.ctx-item').forEach(function (it) {
            it.addEventListener('click', function () {
                var action = it.dataset.a;
                closeContextMenu();
                if (action === 'preview') openCaseModal();
            });
        });
    }

    function closeContextMenu() { ctxMenu.classList.remove('show'); }
    document.addEventListener('click', function (e) {
        if (!ctxMenu.contains(e.target) && !e.target.closest('.card')) closeContextMenu();
    });
    document.addEventListener('scroll', closeContextMenu, true);

    renderGrid('all');
})();


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
        tipHq: 'Our team is based here',
        tipCovered: 'projects delivered',
        tipAvailable: 'Available nationwide — remote delivery',
        totalSuffix: '+',
        serviceLabels: ['Web', 'Mobile', 'AI', 'Desktop', 'UI/UX', 'Maintenance']
    },
    '28': { status: 'hq', projects: null, types: [0, 1, 2, 3, 4, 5], note: 'The GM SOFT team works from M’Sila — every project we ship starts here.' },
    '16': { status: 'covered', projects: 6, types: [0, 2, 4], note: 'Web platforms and AI solutions delivered for clients in the capital.' },
    '31': { status: 'covered', projects: 4, types: [0, 1], note: 'Web and mobile projects for businesses across the west.' },
    '25': { status: 'covered', projects: 3, types: [0, 3], note: 'Desktop systems and web portals for institutions in Constantine.' },
    '19': { status: 'covered', projects: 3, types: [0, 1], note: 'Web and mobile apps for companies in the High Plains.' },
    '23': { status: 'covered', projects: 2, types: [0, 5], note: 'Website delivery and ongoing maintenance for eastern clients.' },
    '15': { status: 'covered', projects: 2, types: [1, 4], note: 'Mobile apps and UI/UX design for startups in the Kabylie region.' },
    '13': { status: 'covered', projects: 2, types: [0, 1], note: 'Web and mobile projects for clients in the far west.' },
    '34': { status: 'covered', projects: 2, types: [0, 3], note: 'Web portals and desktop tools for local businesses.' },
    '07': { status: 'covered', projects: 1, types: [0], note: 'A first website delivered for a Biskra-based business.' },
    '03': { status: 'covered', projects: 1, types: [0, 5], note: 'Web presence and maintenance for Laghouat professionals.' },
    '08': { status: 'covered', projects: 1, types: [0], note: 'Website delivered for a Béchar enterprise.' },
    '18': { status: 'covered', projects: 1, types: [1], note: 'A mobile app delivered for clients in Jijel.' },
    '11': { status: 'covered', projects: 1, types: [0, 5], note: 'Remote web projects served as far as the deep south.' }
};

const presenceFR = {
    ui: {
        hqBadge: 'Notre équipe',
        coveredBadge: 'Projets livrés',
        tipHq: 'Notre équipe est basée ici',
        tipCovered: 'projets livrés',
        tipAvailable: 'Disponible partout — livraison à distance',
        totalSuffix: '+',
        serviceLabels: ['Web', 'Mobile', 'IA', 'Desktop', 'UI/UX', 'Maintenance']
    },
    '28': { status: 'hq', projects: null, types: [0, 1, 2, 3, 4, 5], note: 'L’équipe GM SOFT travaille depuis M’Sila — chaque projet livré commence ici.' },
    '16': { status: 'covered', projects: 6, types: [0, 2, 4], note: 'Plateformes web et solutions IA livrées pour des clients de la capitale.' },
    '31': { status: 'covered', projects: 4, types: [0, 1], note: 'Projets web et mobiles pour des entreprises de l’ouest.' },
    '25': { status: 'covered', projects: 3, types: [0, 3], note: 'Systèmes desktop et portails web pour des institutions à Constantine.' },
    '19': { status: 'covered', projects: 3, types: [0, 1], note: 'Web et applications mobiles pour les entreprises des Hauts-Plateaux.' },
    '23': { status: 'covered', projects: 2, types: [0, 5], note: 'Création de sites et maintenance continue pour des clients de l’est.' },
    '15': { status: 'covered', projects: 2, types: [1, 4], note: 'Applications mobiles et design UI/UX pour des startups de la Kabylie.' },
    '13': { status: 'covered', projects: 2, types: [0, 1], note: 'Projets web et mobiles pour des clients de l’extrême ouest.' },
    '34': { status: 'covered', projects: 2, types: [0, 3], note: 'Portails web et outils desktop pour les entreprises locales.' },
    '07': { status: 'covered', projects: 1, types: [0], note: 'Un premier site web livré pour une entreprise de Biskra.' },
    '03': { status: 'covered', projects: 1, types: [0, 5], note: 'Site web et maintenance pour des professionnels de Laghouat.' },
    '08': { status: 'covered', projects: 1, types: [0], note: 'Site web livré pour une entreprise de Béchar.' },
    '18': { status: 'covered', projects: 1, types: [1], note: 'Une application mobile livrée pour des clients à Jijel.' },
    '11': { status: 'covered', projects: 1, types: [0, 5], note: 'Des projets web servis à distance jusqu’au grand Sud.' }
};

const presenceAR = {
    ui: {
        hqBadge: 'فريقنا',
        coveredBadge: 'مشاريع منجزة',
        tipHq: 'هنا يقع فريقنا',
        tipCovered: 'مشاريع منجزة',
        tipAvailable: 'متاحة في كامل الجزائر — خدمة عن بُعد',
        totalSuffix: '+',
        serviceLabels: ['مواقع ويب', 'تطبيقات', 'ذكاء اصطناعي', 'برامج مكتبية', 'واجهات UI/UX', 'صيانة']
    },
    '28': { status: 'hq', projects: null, types: [0, 1, 2, 3, 4, 5], note: 'فريق GM SOFT يعمل من المسيلة — كل مشروع نسلّمه يبدأ من هنا.' },
    '16': { status: 'covered', projects: 6, types: [0, 2, 4], note: 'منصات ويب وحلول ذكاء اصطناعي لعملاء بالعاصمة.' },
    '31': { status: 'covered', projects: 4, types: [0, 1], note: 'مشاريع ويب وتطبيقات لغرب الجزائر.' },
    '25': { status: 'covered', projects: 3, types: [0, 3], note: 'أنظمة مكتبية وبوابات ويب لمؤسسات بقسنطينة.' },
    '19': { status: 'covered', projects: 3, types: [0, 1], note: 'مواقع وتطبيقات للشركات في الهضاب العليا.' },
    '23': { status: 'covered', projects: 2, types: [0, 5], note: 'إنشاء مواقع وصيانة مستمرة لعملاء الشرق.' },
    '15': { status: 'covered', projects: 2, types: [1, 4], note: 'تطبيقات وتصميم واجهات لشركات ناشئة في القبائل.' },
    '13': { status: 'covered', projects: 2, types: [0, 1], note: 'مشاريع ويب وتطبيقات لعملاء الغرب الأقصى.' },
    '34': { status: 'covered', projects: 2, types: [0, 3], note: 'بوابات وأدوات مكتبية للتجار والمؤسسات المحلية.' },
    '07': { status: 'covered', projects: 1, types: [0], note: 'أول موقع إلكتروني لنشاط تجاري في بسكرة.' },
    '03': { status: 'covered', projects: 1, types: [0, 5], note: 'حضور رقمي وصيانة لمهنيي الأغواط.' },
    '08': { status: 'covered', projects: 1, types: [0], note: 'موقع إلكتروني لمؤسسة تجارية في بشار.' },
    '18': { status: 'covered', projects: 1, types: [1], note: 'تطبيق جوال لعملائنا بجيجل.' },
    '11': { status: 'covered', projects: 1, types: [0, 5], note: 'مشاريع ويب نخدم بها عملاء الجنوب البعيد عن بُعد.' }
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
    const sideLatin = document.getElementById('sideLatin');
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
        sideBadge.className = 'side-status-badge ' + (isHQ ? 'hq' : 'covered');
        sideBadge.textContent = isHQ ? ui.hqBadge : ui.coveredBadge;
        sideName.textContent = isAr ? meta.ar : meta.latin;
        sideLatin.textContent = isAr ? meta.latin : meta.ar;
        sideCount.textContent = isHQ ? (totalProjects + ui.totalSuffix) : String(info.projects);
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
            else if (info.status === 'hq') showTooltip(e, name, ui.tipHq);
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