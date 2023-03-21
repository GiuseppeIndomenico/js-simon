// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const content = document.getElementById('content');
const btnStart = document.querySelector('button');
btnStart.addEventListener('click', start);
//creiamo un evento che faccia parte la generazione dei numeri casuali e che li mostri alla persona su schermo
function start(e) {
    e.preventDefault();

    const numSimon = 5;
    function numGenerator(num, simonIndex) {
        let numbers = [];
        while (numbers.length < simonIndex) {
            let randomNumber = Math.floor((Math.random() * num));

            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    
    }
    let numbers = numGenerator(100, numSimon);
    //console.log(numbers);
    content.innerHTML= `<h1>${numbers} </h1>`

    
}


