import loaderToggle from "./loader"
const reqrests = async(request) => {
    loaderToggle(true)
    const req = await fetch(request)
    if(!req.ok)
    {
        loaderToggle(false)
        throw new Error("Api olishda xatolik ketdi, iltimos tekshrib quying")

    }
    const data = await req.json()
    loaderToggle(false)
    return data
}
export default reqrests;