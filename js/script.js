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
    let numbers = numGenerator(99, numSimon);
    console.log(numbers);
    //dopodichè settiamo untimeout che faccia comparire gli input e scomparire i numeri dallo schermo 
    const time = setTimeout(timeOut, 3000)
    content.innerHTML = `<h1>Questi sono i numeri da ricordare!</h1>
    <h2 class="text-center">${numbers} </h2>`

    function timeOut() {

        content.innerHTML = `  <div clas="card-header">
                                    <h1 class="text-center">inserisci negli spazi i numeri che ricordi! </h1>
                                </div>
        <div class="card-body">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">

        </div>
        <div class="card-footer d-flex  align-items-center justify-center">
        <button id="result"  class="btn btn-danger m-auto">Verifica!</button>
        </div>
     `
        const btnResult = document.getElementById('result')
        //console.log(btnResult);
        btnResult.addEventListener('click', playerResult)
        //tramite un tasto per avviare la funzione, attiviaso un ciclo e raccogliamo i vari numeri inseriti dall'utente;
        function playerResult() {
            const input = document.querySelectorAll('input')
            let indovinati = 0
            //    console.log(input);
            for (let i = 0; i < input.length; i++) {
                let numPlayer = input[i].value;
                console.log(numPlayer);
                for (let k = 0; k < numbers.length; k++) {
                    const number = numbers[k];
                    if (numPlayer.includes(number)) {
                        // console.log('il numero è giusto');
                        indovinati++
                    }
                }

            }
            content.innerHTML= `<h1>complimenti! ne hai indovinati: ${indovinati}</h1>
            
            `

        }
    }
}


