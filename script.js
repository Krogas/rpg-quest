document.addEventListener("DOMContentLoaded", () => {
const place = "ANANASIE";
const pages = [

`
Hej, jestem Nicki.

Tyle się dzieje tutaj na Pyrkonie, że kompletnie się zgubiłam…`,

`
Mój mąż, Loczek, powiedział, 
że jeśli tak się stanie, będzie na mnie czekał
przy <b>${place}</b> `,

`
Problem w tym, że… 
Nie mam pojęcia gdzie to jest.....
Pomożesz mi bezpiecznie do niego dotrzeć?`

];

const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

let page = 0;

function type(text, cb){

    textEl.innerHTML = "";

    let i = 0;

    function tick(){

        if(i < text.length){

            textEl.innerHTML =
                text.substring(0,i+1) +
                '<span class="cursor">▍</span>';

            i++;
            setTimeout(tick, 25);

        } else {
            textEl.innerHTML = text;
            cb();
        }
    }

    tick();
}

function showPage(i){

    nextBtn.classList.remove("hidden");

    type(pages[i], () => {
        nextBtn.classList.remove("hidden");
    });
}

nextBtn.addEventListener("click", () => {

    page++;

    if(page < pages.length){
        showPage(page);
    } else {
        showConsent();
    }
});

function showConsent(){

    document.getElementById("actions").style.display = "none";

    textEl.innerHTML = `
        <div class="quest-panel">
            <div class="rodo">
                Udział  jest dobrowolny. 
                Wydarzenie może być 
                nagrywane i publikowane 
                w mediach społecznościowych 
                jako materiał humorystyczny
                z wydarzenia publicznego. 
                Kontynuując, akceptujesz 
                udział w tej historii.
            </div>

            <button class="questAcc-btn" onclick="finish()">
ACCEPT QUEST
            </button>

        </div>
    `;
}


window.finish = function(){

   
    const code =
        "CHODŹ ZA MNĄ";

    textEl.innerHTML = `
        <div class="final">
    ✔ QUEST ACCEPTED
    Znajdź męża Nicki. 
    Mówił, że będzie przy
    <b>${place}</b>

            
    POWIEDZ NA GŁOS: 
    <b>${code}</b>
        </div>
    `;
};

showPage(0);

});
