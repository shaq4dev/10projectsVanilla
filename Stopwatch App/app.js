//  timer 

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

// controls

const controls = document.querySelectorAll('button')

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', () => {
        console.log(controls[i].textContent)
        // functionalities 

        let currentButton = controls[i].textContent

        currentButton != 'Start' ? startTimer() : null
    })
}

function startTimer (){
    console.log('start timer works')
}

function stopTimer (){
    console.log('stop timer works')
}

function reset () {
    console.log('reset timer works')
}