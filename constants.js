export const translations = {
    EN: {
        start: "START",
        title: "Let's get rid of that",
        welcome: "Welcome! This web/app is designed to assist you in writing feedback for colleagues. To do this, we will ask you a series of questions. Let's start by specifying the gender of your colleague.",
        genderPrompt: "Please specify who the feedback is for:"
    },
    ES: {
        start: "INICIAR",
        title: "Deshagámonos de ese",
        welcome: "¡Bienvenido! Esta web/app está diseñada para ayudarte a escribir feedback para tus colegas. Para ello, te haremos una serie de preguntas. Empecemos especificando el género de tu colega.",
        genderPrompt: "Por favor, especifica para quién es el feedback:"
    },
    DE: {
        start: "STARTEN",
        title: "Lassen wir uns davon los, das",
        welcome: "Willkommen! Diese Web-App wurde entwickelt, um Ihnen zu helfen, Feedback für Ihre Kollegen zu schreiben. Dazu werden wir Ihnen eine Reihe von Fragen stellen. Beginnen wir damit, das Geschlecht Ihres Kollegen anzugeben.",
        genderPrompt: "Bitte geben Sie an, für wen das Feedback bestimmt ist:"
    },
    NL: {
        start: "STARTEN",
        title: "Laten we ervan afkomen, dat",
        welcome: "Welkom! Deze web/app is ontworpen om je te helpen bij het schrijven van feedback voor je collega's. Om dit te doen, zullen we je een aantal vragen stellen. Laten we beginnen met het specificeren van het geslacht van je collega.",
        genderPrompt: "Geef aan voor wie de feedback bedoeld is:"
    }
};

export function defaultLanguage() {
    const html = document.querySelector('html');
    return html.lang;
}

export function updateDocLanguage() {
    const html = document.querySelector('html');
    html.lang = currentLanguage().toLocaleLowerCase();
}

export function setCurrentLanguage(newLang) {
    localStorage.setItem('selectedLanguage', newLang);
}

export function retrieveLanguage() {
    return localStorage.getItem('selectedLanguage');
}

export function currentLanguage() {
    
    var savedLanguage = retrieveLanguage();
    if (savedLanguage) {
        var current = savedLanguage;
    } else {
        var current = defaultLanguage();
    }

    if (current) {
        return current.toUpperCase();
    } else {
        console.log("wut");
        return "EN";
    }
}

export function currentTranslations() {

    var language = currentLanguage().toUpperCase();
    return translations[language];
}

export var texts = currentTranslations();

export const Modules = {
    Main: 0,
    Welcome: 1,
    ButFirst: 2,
    Language: 3,
    Options: 4
}

export const Events = {
    LanguageChanged: 1,
    Started: 2,
    GenderSelected: 3,
    HumsDefined: 4,
    ShowOptions: 5,
    Selected: 6
}

export function MID(thismodule,event) {
    if (Object.values(Modules).includes(thismodule) && Object.values(Events).includes(event)) {
        return `${thismodule}.${event}`;
    } else {
        throw new Error("Invalid module or event");
    }
}

export async function typeWriterEffect(elementId, text, callback) {
    let element = document.getElementById(elementId);
    let index = 0;
    async function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            await sleep(type, 50);
        } else if (callback) {
            callback();
        }
    }
    type();
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
