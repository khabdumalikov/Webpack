
const cardForEl = document.querySelector(".cards")
export const creatCountries = (countri) => {
    cardForEl.innerHTML = ''
    countri.forEach((countr) => {
        const commonName = countr.name.common
        const region = countr.region
        const population = countr.population
        const capitap = countr.capitap ? countr.capitap[0] : "No capital"
        const flag = countr.flags.svg

        //li
        const li = document.createElement('li')
        li.classList.add('cards__item')
        li.innerHTML = `
         <a href="./about.html?country=/name/${commonName}">
                        <img src=${flag} alt="germany-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">${commonName}</h3>
                            <p class="population">Population: <span>${population}</span></p>
                            <p class="region">Region: <span>${region}</span></p>
                            <p class="capital">Capital: <span>${capitap}</span></p>
                        </div>
                    </a>
        `
        cardForEl.appendChild(li)
    })
}


// About Ui
const countryInfo = document.querySelector('.country-info')
export const createCountrInfo = (country) => {
    const { population, borders, capital, flags, name, currencies, subregion, region, tld, languages } = country;

    const nativeName = Object.values(name.nativeName)[0].official;
    const currenci = Object.values(currencies)[0].name
    const language = Object.values(languages)[0]

    countryInfo.innerHTML = `
    <img class="country-info__img" src=${flags.svg} alt="germany-flag" width="560"
                    height="400" />
                <div class="country-info__content">
                    <h2>${name.common}</h2>
                    <ul class="country-info__list">
                        <li class="country-info__item">
                            <p class="name">
                                Native Name:
                                <span>${nativeName}</span>
                            </p>
                            <p class="population">
                                Population:
                                <span>${population}</span>
                            </p>
                            <p class="region">
                                Region:
                                <span>${region}</span>
                            </p>
                            <p class="sub-region">
                                Sub Region:
                                <span>${subregion}</span>
                            </p>
                            <p class="capital">
                                Capital:
                                <span>${capital}</span>
                            </p>
                        </li>
                        <li class="country-info__item">
                            <p class="name">
                                Top Level Domain:
                                <span>${tld}</span>
                            </p>
                            <p class="population">
                                Currencies:
                                <span>${currenci}</span>
                            </p>
                            <p class="region">
                                Languages:
                                <span>${language}</span>
                            </p>
                        </li>
                    </ul>

                    <div class="country-info__borders">
                        <h3>Border Countries:</h3>
                        ${borders ? borders.map((border) => {
                            return `
                            <a href="./about.html?country=/alpha/${border}">${border}</a>
                            `
                        }) : "No borders"} 
                    </div>
                </div>
    `
    console.log(language);
    console.log(country);
}