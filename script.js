document.addEventListener("DOMContentLoaded", () => {

const pages = [

`Cześć.

Nazywam się Kasia.

To jest mój QUEST LOG.`,

`Zaginął mój mąż.

Ostatni raz widziany był w miejscu,
gdzie zaczyna się zabawa i kończy rozsądek.`,

`Twoim zadaniem będzie:
- odnaleźć ślady
- podjąć decyzję
- wejść w historię`,

`Jebać biede`


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
            <div class="quest-line">
                Udział w queście jest dobrowolny. 
                Wydarzenie może być nagrywane i publikowane 
                w mediach społecznościowych jako materiał 
                humorystyczny/reportażowy z wydarzenia publicznego.
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
