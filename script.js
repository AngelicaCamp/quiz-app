// criar gabarito
const corretAnswers = ['B','A','B','B','A','A']

const form = document.querySelector('.quiz-form')
const divResult = document.querySelector('.result')

form.addEventListener('submit',event => {
    event.preventDefault()
        
    // obter respostas do usuário
    const answersUser = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
    ]

    let score = 0
    const question = 100 / 6

    // compararar respostas x gabarito
    answersUser.forEach((answer,index) => {
        if(answer === corretAnswers[index]){
            score += question
        }
    })

    // mostrar resultado do quiz ao usuário
    scrollTo(0,0)
    divResult.classList.remove('d-none')
        
    let counter = 0
    
    const timer = setInterval(() => {
        
        if (counter === Math.round(score)){
            clearInterval(timer)
        }
        
        const span = divResult.querySelector('span')
        span.textContent = `${counter}%`
        counter++

    },10)

})





