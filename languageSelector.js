import * as K from "./constants.js";

document.addEventListener('DOMContentLoaded', function() {   

    const docLang = K.defaultLanguage();
    const savedLanguage = K.retrieveLanguage();
    const defaultLang = savedLanguage ? savedLanguage : docLang;
    
    K.setCurrentLanguage(defaultLang)

    var langSelector = document.getElementById("active_language");
    langSelector.innerHTML = K.currentLanguage();

    langSelector.parentNode.addEventListener("click", function(event) {
        showLanguageOptions(event);
      });
});
  
function showLanguageOptions(event) {

    requestAnimationFrame(() => {

        var button = document.getElementById("active");

        requestAnimationFrame(() => {
        button.id = "chosen";

            document.body.addEventListener("click", function() {
        
                requestAnimationFrame(() => {
                    button.id = "active";
                });
            }, { once: true });
        });
    });
}
