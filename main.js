// tady je místo pro náš program



function hazejKostkou() {
    let zprava = document.querySelector('#zprava');
    let kostka = document.querySelector('#kostka');
    let hodnota = Math.floor(Math.random() * 6 + 1);

    if (hodnota === 6) {
        zprava.textContent = 'Hodil si 6. Vyhrál si!'
    } else {
        zprava.textContent = "Hodil si číslo " + hodnota + '. Zkus to znovu.'
    }

    kostka.src = 'obrazky/' + hodnota + '.png'
}