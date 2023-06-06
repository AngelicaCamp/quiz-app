// executa uma função após um determinado tempo 
setTimeout(() => {}, 2000)


// executa uma função repetidamente (tempo em tempo)

let counter = 0

const timer = setInterval(() => {
    console.log('1 segundo se passou...')
    counter++

    if (counter === 5){
        clearInterval(timer)
    }
}, 1000)
