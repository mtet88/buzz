import * as K from "./constants.js";

window.onload = () => {
    
    var container = document.getElementById("languageButtonContainer");
    var languages = Object.keys(K.translations);

    languages.forEach((element, index) => {

        if (element === K.currentLanguage()) {
            return;
        }

        let button = document.createElement("div");
        let text = document.createElement("div");

        button.appendChild(text);
        container.appendChild(button);

        button.id = `op${index}`;
        button.classList.add("languageButton");
        button.classList.add("option");

        text.classList.add("languageButtonText"); 
        text.innerHTML = element;
    });
};

  