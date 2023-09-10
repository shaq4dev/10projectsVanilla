
const btnEl = document.querySelectorAll('button')
const output = document.getElementById('output')

for (let i = 0; i < btnEl.length; i++) {

    btnEl[i].addEventListener('click', (e) => {
    const buttonValue = (btnEl[i].textContent)

    // console.log(buttonValue)

    buttonValue !== "C"? console.log(clearResults()): null

    // if (buttonValue !== 'C') {
    //     console.log('this works')
    // }

        // if (buttonValue === 'C') {
        //     appendValue(buttonValue)
        //     // clearResults()
        // } else if (buttonValue === '=') {
        //     calculateResults()
        // } 
        // else {
        //     // appendValue(buttonValue)
        //     clearResults()
        // }
        
    })

}

const clearResults = () => {
    console.log('this works')
}

const calculateResults = () => {
    output.textContent = eval(output.textContent)
}

const appendValue = (buttonValue) => {
    output.value += buttonValue
}