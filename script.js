import * as K from "./constants.js";

window.onload = () => {
    
}

window.addEventListener('message', function(event) {
    switch (event.data) {
        case K.MID(K.Modules.Welcome, K.Events.Started):
            startFeedbackProcess_ButFirst();
            break;
        default:
            console.log('Received: ' + event.data);
            break;
    }
})

async function startFeedbackProcess_ButFirst() {
    var mainCell = document.getElement('main-cell');
    mainCell.innerHTML = '';

    var iframe = document.createElement('maina]c');
    iframe.src = 'but_first.js';
    mainCell.appendChild(iframe);
}

/*
document.addEventListener('DOMContentLoaded', function() {
    //applyTranslations();
});

async function toggleLanguageOptions() {
    const options = document.getElementById('languageOptions');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

async function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    location.reload();
    applyTranslations();
}

async function applyTranslations() {

     
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const currentTranslations = K.translations[selectedLanguage];

    if (currentTranslations) {
        typeWriterEffect('welcomeMessage', currentTranslations.welcomeText, () => {
            // ... Other translation-related logic
        });
    }
}

async function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'inline-block';
    let timer = requestAnimationFrame(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity += opacity * 0.1 + 0.1;
    }, 10);
}

async function selectGender(gender) {
    const selectedButton = document.querySelector(`button[data-gender="${gender}"]`);
    selectedButton.classList.add('selected');

    await sleep(500)
    const otherButtons = document.querySelectorAll(`.genderBtn:not([data-gender="${gender}"])`);
    for (let btn of otherButtons) {
        btn.style.opacity = 0;
    }
    document.getElementById('genderPrompt').style.opacity = 0;

    await sleep(1000)
    selectedButton.style.position = 'absolute';
    selectedButton.style.top = '10px';
    selectedButton.style.left = '10px';

    await sleep(1000)
    const questionPrompt = gender === 'male' ? 'What does he want to know about himself?' : 
    gender === 'female' ? 'What does she want to know about herself?' : 
    'What do they want to know about themselves?';

    typeWriterEffect('genderPrompt', questionPrompt, () => {
        document.getElementById('questionSection').style.display = 'block';
    });
}
*/