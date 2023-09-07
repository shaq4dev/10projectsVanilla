const api__accessKey = 'UGj5VXszTysdkocrK9tfFmq79LDTxfppxGwrxLLhBt8'

const form = document.querySelector('.search')
const input = document.querySelector('.formIn')
const button = document.querySelector('.submit')
const load = document.querySelector('.load')
const section_container = document.querySelector('.section-container')

let inputData = ''
let page = 1

async function searchImages(){
    inputData = input.value 

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api__accessKey} `

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    results.map((result) => {
        const content = document.createElement('div')
        content.className = 'content max-w-sm mx-auto my-8 shadow-lg sm:mx-2 hover:scale-105 transition-all cursor-pointer'

        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        image.className = 'rounded-t-lg w-[100%] h-[200px] object-cover'

        const imageLink = document.createElement('a')
        imageLink.className = 'desc py-5 px-2 flex inline-block bg-white rounded-b-lg'
        imageLink.href = result.links.html
        imageLink.target = '_blank'
        imageLink.textContent = result.alt_description

        content.appendChild(image)
        content.appendChild(imageLink)

        section_container.appendChild(content)

    })

    page++

    if (page > 1) {
        load.style.display = 'block'
    }

    load.addEventListener('click', searchImages)

    console.log(page)

    // console.log(results)

    // if (!response.ok){
    //     console.log('Connection to API failed')
    // }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    searchImages()
})