document.addEventListener("DOMContentLoaded", () => {

const pages = [

`Hej!

Jestem Nicki.

Tyle się dzieje tutaj na Pyrkonie, że kompletnie się zgubiłam…`,

`
Mój mąż, Loczek, powiedział, 
że jeśli tak się stanie, będzie na mnie czekał
przy toitoijccch `,

`
Problem w tym, że… 
Nie mam pojęcia gdzie to jest.....`,
`
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

            <h2>⚠ WARUNKI QUESTU</h2>

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

            <button class="quest-btn" onclick="finish()">
                ACCEPT QUEST
            </button>

        </div>
    `;
}


window.finish = function(){

   
    const code =
        "Akceptuje zadanie młody parawanie";

    textEl.innerHTML = `
        <div class="final">
            ✔ QUEST ACCEPTED

            Tajny KOD POWIEDZ TO NA GŁOS: <b>${code}</b>


        </div>
    `;
};

showPage(0);

});
