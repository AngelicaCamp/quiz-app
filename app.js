const gabarito = ['B','A','B','B','A','A']
const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

let score = 0

form.addEventListener('submit', event => {
    event.preventDefault()


    // respostas usuário
    const respostas= [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
    ]

    const peso = 100 / 6
   
    // verificar respostas
    respostas.forEach((resposta, index) => {
        if (resposta === gabarito[index]){
            score += peso
           
        }
    })

    // exibir pontuação ao usuário
    scrollTo(0,0)
    finalResult.classList.remove('d-none')
    
    
    // verificar qtd de acertos
    let counter = 0
    
    const timer = setInterval(() => {
        if(counter === Math.round(score)){
            clearInterval(timer)
        }
        
        const span = finalResult.querySelector('span')
        span.textContent = `${counter}%`
        counter++

    }, 10);
     
})



