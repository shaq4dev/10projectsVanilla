const api_key = "e4ec0f8933b07a353e4e8149ddb8cf3c"

const input = document.querySelector('.city_input')
const get_weather = document.querySelector('.submit')
const weather = document.querySelector('.submit2')
const form = document.querySelector('form')
const img = document.querySelector('.image-container')
const temp = document.querySelector('.temp')
const weather__type = document.querySelector('.weather__type')
const feels_like = document.querySelector('.feels-like')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')
const resultContainer = document.querySelector('.results__container')

get_weather.addEventListener('click', (e) => {
    resultContainer.style.display = 'block'
})
weather.addEventListener('click', (e) => {
    resultContainer.style.display = 'block'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = input.value
    // console.log(inputValue)

    weatherData(inputValue)

    async function weatherData (inputValue) {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}&units=metric`)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            const icon = data.weather[0].icon
            const temperature = Math.round(data.main.temp)
            const desc = data.weather[0].description

            const feel = Math.round(data.main.feels_like)
            const humid = data.main.humidity
            const wind = data.wind.speed
            

            img.innerHTML = `<img
            src="http://openweathermap.org/img/wn/${icon}.png"
            alt="forecast image"
            class="weather_img w-[90px] mx-auto"
          />` 

            temp.textContent = `${temperature}˚C`
            weather__type.textContent = desc

            feels_like.textContent = `Feels like: ${feel}˚C`
            humid.textContent = `Humidity: ${humid}˚C`
            wind.textContent = `Wind Speed: ${wind}˚C`


        } catch (error) {
             img.innerHTML = ''

            temp.textContent = ''
            weather__type.textContent = 'An error occurred. Please try again later.'

            feels_like.style.display = 'none'
            humidity.style.display = 'none'
            windspeed.style.display = 'none'
        }

    }
})