/* esercizio 1 */

let btn1 = document.querySelector("#oneBtn")
let btn2 = document.querySelector("#secBtn")
let btn3 = document.querySelector("#thirdBtn")
let paragrafi = document.querySelector("#paragr")


function clickOneBtn () {
    btn1.addEventListener("click", ()=>{
        paragrafi.classList.toggle("d-none");
    })
}
clickOneBtn()

function clickColor () {
    btn2.addEventListener("click", ()=>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        paragrafi.style.color = "#" + randomColor
    })
}

clickColor()

function clickstrong (){
    btn3.addEventListener("click", ()=>{
        paragrafi.classList.toggle("fw-bold")
    })
}
clickstrong()



/* esercizio 2 */


/* Replicare le card in dinamica con JavaScript, come visto a lezione.
Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS. */

const studenti = [
    {name: "Fabrizio Biancaniello", img: "https://picsum.photos/200", città: "Roma", età: "38"},
    {name: "Michele Violante", img: "https://picsum.photos/201", città: "Verona", età: "34"},
    {name: "Giuseppe Merola", img: "https://picsum.photos/202", città: "Napoli", età: "28"},
    {name: "Denis Parise", img: "https://picsum.photos/203", città: "Savona", età: "18"},
    {name: "Emanuele Pelliccia", img: "https://picsum.photos/204", città: "Firenze", età: "22"},
    {name: "Francesco Totti", img: "https://picsum.photos/206", città: "Milano", età: "42"},
];

let card = document.querySelector("#cardsWrapper");


function creacard () {
    /* questo serve a non far ripetere la copia di tutte le carte */
    card.innerHTML = "";
    studenti.forEach( (person)=>{
        let col = document.createElement("div");
        col.classList.add("col-3","my-3");
        col.innerHTML =`    <div class="card h-100">
                                <img src="${person.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${person.name}</h5>
                                    <p class="card-text">${person.città}, età: ${person.età}</p>
                                    <a href="#" id="go" class="btn btn-primary">Vai alla scheda</a>
                                </div>
                            </div>`

        card.appendChild(col)
    })
}
creacard()

let inputName = document.querySelector("#inputName")
let inputCittà = document.querySelector("#inputCittà")
let inputAge = document.querySelector("#inputAge")
let btnForm = document.querySelector("#btnForm")
let sparisci = document.querySelector("#sparisci")

/* funzione di creazione carta dall'utente */
btnForm.addEventListener("click", ()=>{
    studenti.push({name: inputName.value, img: "https://picsum.photos/205", città: inputCittà.value, età: inputAge.value})
    creacard()
})
