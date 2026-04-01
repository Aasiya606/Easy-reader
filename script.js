function switchView(viewId) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('reader-view').style.display = 'none';
    document.getElementById(viewId).style.display = 'flex';
}

// Accordion Toggle Logic
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    });
}

const box = document.getElementById('text-square');

function applyFont(font) { box.style.fontFamily = font; }
function applyLineHeight(val) { box.style.lineHeight = val; }
function adjustSize() { box.style.fontSize = document.getElementById('size-slider').value + "pt"; }

function applyContrast(mode) {
    if(mode === 'high') { box.style.background = "black"; box.style.color = "yellow"; }
    else if(mode === 'soft') { box.style.background = "#f5f5dc"; box.style.color = "#003366"; }
    else { box.style.background = "#b0bdc1"; box.style.color = "black"; }
}

let synth = window.speechSynthesis;
function speakText() {
    if (synth.speaking) synth.cancel();
    let utter = new SpeechSynthesisUtterance(box.innerText);
    utter.rate = document.getElementById('tts-rate').value;
    synth.speak(utter);
}
function stopSpeech() { synth.cancel(); }

function fetchURL() {
    let url = document.getElementById('url-input').value;
    if(url) { box.innerText = "Importing text from " + url + "...\n\nPlease wait."; }
}

function resetAll() {
    box.style.fontFamily = "Arial";
    box.style.fontSize = "20pt";
    box.style.lineHeight = "1.5";
    box.style.background = "#b0bdc1";
    box.style.color = "black";
    alert("Settings Reset!");
}