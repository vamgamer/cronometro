window.onload = function () { //Executa o js imediatamente após o carregamento de uma página
    var seconds = 00
    var tens = 00

    var appendTens = document.querySelector('span#tens')
    var appendSeconds = document.querySelector('span#seconds')

    var buttonStart = document.querySelector('button#button-start')
    var buttonStop = document.querySelector('button#button-stop')
    var buttonReset = document.querySelector('button#button-reset')

    var interval;//Função nativa do js  

    buttonStart.onclick = function () {
        clearInterval(interval)//método que limpa o temporizador que é definido no setInterval()
        interval = setInterval(startTimer, 10)//método que chama a função temporizador em intervalos especificados 
    }
    buttonStop.onclick = function () {
        clearInterval(interval)
    }
    buttonReset.onclick = function () {
        clearInterval(interval)
        tens = "00"
        seconds = "00"

        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }

    function startTimer() {
        tens++

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }
        if (tens > 99) {
            console.log('seconds')
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }

}