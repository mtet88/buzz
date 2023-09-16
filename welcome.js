import * as K from './constants.js';

window.onload = () => {
  changeColor();
};

document.addEventListener('DOMContentLoaded', function() {

  applyTranslations();
  
  const startB = document.getElementById("startButton");
  startB.addEventListener("click", function() {
    sendTrigger();
  });
});

window.addEventListener('message', function(event) {
  switch (event.data) {
    case MID(Modules.Main, Events.LangageChanged):
      applyTranslations();
      break;
    default:
      console.log('Received: ' + event.data);
      break;
  }
});

/* BASIC */

async function applyTranslations() {
  const startButton = document.getElementById('startButton');
  const introSubText = document.getElementById('introSubText');

  startButton.innerText = K.texts.start;
  introSubText.innerText = K.texts.title;
}

/* DECORATION AND BEHAVIOUR */

async function changeColor() {

  let zElement = document.getElementById('firstZ');

  while (true) {

    zElement.style.color = "black";
    let onTime = (Math.random() * 750) + 250;
    let maxCycles = 5;
    let offCycles = Math.floor(Math.random() * maxCycles);
    let cycleTime = fibonacci(5)[offCycles] * 100;

    await K.sleep(onTime);

    for (let i = 0; i < offCycles; i++) {

      if (zElement.style.color === "black") {
        zElement.style.color = "#e0c242"
      } else {
        zElement.style.color = "black"
      }

      await K.sleep(cycleTime);
    }
  }
}

async function sendTrigger() {

  console.log("A");
  const startButton = document.getElementById('startButton');
  const introSubText = document.getElementById('introSubText');
  const buzzText = document.getElementById('buzzText');

  console.log("B");
  startButton.classList.add('move-down');
  introSubText.classList.add('move-up');
  buzzText.classList.add('fade-out');

  console.log("C");
  await K.sleep(2000);

  console.log("D");
  parent.postMessage(K.MID(K.Modules.Welcome, K.Events.Started), window.location.origin);
}

/* UTILS */

function fibonacci(n, reversed = false) {

  switch (n) {
  case 0: return [];
  case 1: return [1];
  default: 

    let fib = fibonacci(n-1) + fibonacci(n-2);
    return reversed ? fib.reversed() : fib
  }
}
