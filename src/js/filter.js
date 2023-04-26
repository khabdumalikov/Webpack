const searchForEl = document.querySelector(".search")
searchForEl.search.addEventListener("input", () => {
    const searchValue = searchForEl.search.value.toLowerCase()
    const searchItem = document.querySelectorAll(".cards__item")
    const searchTitle = document.querySelectorAll(".cards__title")
    searchTitle.forEach((title, i) => {
        if(title.textContent.toLowerCase().includes(searchValue))
        {
            searchItem[i].style.display = 'block'
        }
        else {
            searchItem[i].style.display = 'none'
        }
    })
})

const cardsForLi = document.querySelectorAll('.search__select-list li')
const cardsForSpan = document.querySelector('.search__select span')
import { creatCountries } from "./updateUi"
import reqrests from "./requrest"
cardsForLi.forEach((li) => {
    li.addEventListener('click', () => {
        cardsForSpan.textContent = li.textContent


        let setApi;
        if(cardsForSpan.textContent =='All')
        {
            setApi = 'https://restcountries.com/v3.1/all'
        }
        else {
            setApi = `https://restcountries.com/v3.1/region/${li.textContent}`
        }

        reqrests(setApi).then((data) => {
            creatCountries(data)
        }).catch(err => {
            alert(err.message)
        })
    })
})