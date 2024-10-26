let button = document.getElementById('botaok');
let reiniciar = document.getElementById('nov');
let numeroAleatorio = Math.floor(Math.random() * 100);

console.log(`Número gerado: ${numeroAleatorio}`);

let chances = 5;

function guessNumber() {
    chances--;
    let tentativa = document.querySelector('#linha input');
    let mensagensDiv = document.getElementById('mensagens'); 
    let resultadoDiv = document.getElementById('resultado'); 

  
    resultadoDiv.innerHTML = '';

    if (chances >= 1) {
        if (parseInt(tentativa.value) === numeroAleatorio) {
           
            resultadoDiv.innerHTML = `<h1>Parabéns, você acertou!</h1>`;
        } else if (parseInt(tentativa.value) > numeroAleatorio) {
            let newElement = document.createElement('p');
            newElement.innerHTML = `A tentativa foi ${tentativa.value}! A resposta é menor! Você ainda tem ${chances} tentativas!`;
            mensagensDiv.appendChild(newElement);
        } else if (parseInt(tentativa.value) < numeroAleatorio) {
            let newElement = document.createElement('p');
            newElement.innerHTML = `A tentativa foi ${tentativa.value}! A resposta é maior! Você ainda tem ${chances} tentativas!`;
            mensagensDiv.appendChild(newElement);
        }
    }

    if (chances === 0 && parseInt(tentativa.value) !== numeroAleatorio) {
        let lostElement = document.createElement('h1');
        lostElement.innerHTML = `Você perdeu! A resposta era ${numeroAleatorio}!`;
        resultadoDiv.appendChild(lostElement);
    }
}

button.addEventListener('click', guessNumber);

reiniciar.addEventListener('click', function() {
    window.location.reload();
});
