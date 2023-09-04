import * as K from "./constants.js";

window.onload = () => {
    
}

window.addEventListener('message', function(event) {
    switch (event.data) {
    	case MID(Modules.Main, Events.LangageChanged):
      		applyTranslations();
      		break;
        default:
            console.log('Received: ' + event.data);
            break;
    }
})

document.addEventListener('DOMContentLoaded', function() {
    //applyTranslations();
});

async function writeWelcomeMessage() {
  const startButton = document.getElementById('startButton');
  const introSubText = document.getElementById('introSubText');
  const buzzText = document.getElementById('buzzText');

  startButton.classList.add('move-down');
  introSubText.classList.add('move-up');
  buzzText.classList.add('fade-out');

  await sleep(2000);
  parent.postMessage(MID(Modules.Welcome, Events.Started), window.location.origin);
}

async function showGenderOptions() {
  const startButton = document.getElementById('startButton');
  const introSubText = document.getElementById('introSubText');
  const buzzText = document.getElementById('buzzText');

  startButton.classList.add('move-down');
  introSubText.classList.add('move-up');
  buzzText.classList.add('fade-out');
  await sleep(2000);

  parent.postMessage(MID(Modules.Welcome, Events.Started), window.location.origin);
}

async function ask() {
  const startButton = document.getElementById('startButton');
  const introSubText = document.getElementById('introSubText');
  const buzzText = document.getElementById('buzzText');

  startButton.classList.add('move-down');
  introSubText.classList.add('move-up');
  buzzText.classList.add('fade-out');

  await sleep(2000);
  parent.postMessage(MID(Modules.Welcome, Events.Started), window.location.origin);
}