import "../css/mein.css"
import "./mode"
import reqrests from "./requrest"
import { createCountrInfo } from "./updateUi"
const createWindow = window.location.search
const createUrl = new URLSearchParams(createWindow)
const counrty = createUrl.get('country')
const createApi = `https://restcountries.com/v3.1/${counrty}`
reqrests(createApi).then((data) => {
    createCountrInfo(data[0])
}).catch(err => {
    alert(err.message)
})