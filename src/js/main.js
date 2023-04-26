import "../css/mein.css"
import { creatCountries } from "./updateUi"
import reqrests from "./requrest"
import "./filter"
import "./mode"
const Api = 'https://restcountries.com/v3.1/all'
reqrests(Api).then((data) => {
    creatCountries(data);
}).catch(err => {
    alert(err.message)
})