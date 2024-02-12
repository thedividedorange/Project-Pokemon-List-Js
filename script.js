//We need to fetch a list of pokemons using a loop and display these pokemons in an accordion sorted by the generations

const container = document.querySelector("#container")
let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let pokeObject = [
    {gen: "One", start: 1, end: 10},
    {gen: "two", start: 11, end: 22},
    {gen: "three", start: 23, end: 44},
    {gen: "four", start: 45, end: 78},
    {gen: "five", start: 79, end: 102},
    {gen: "six", start: 103, end: 114},
    {gen: "seven", start: 115, end: 122},
    {gen: "eight", start: 123, end: 135},
    {gen: "night", start: 136, end: 144},
    {gen: "ten", start: 145, end: 151}
  ]

function createAccordion(heading){
    const accordion = document.createElement("div")
    accordion.classList.add("accordion")
    accordion.style.cssText = "display: flex; flex-direction: column;"

    const accordionHead = document.createElement("div")
    accordionHead.classList.add("accordion", "accordionHead")
    accordionHead.style.cssText = "border: 3px solid #333333;"

    const spanElement = document.createElement("span")
    spanElement.classList.add("spanText")
    spanElement.textContent =`Generation ${heading}`


    const accordionBody = document.createElement("div")
    accordionBody.classList.add("accordion", "accordionBody", "accordion-hide")
    accordionBody.style.cssText = "display: flex; flex-wrap: wrap; border: 2px solid gold;"

    container.appendChild(accordion)
    accordion.appendChild(accordionHead)
    accordionHead.appendChild(spanElement)
    accordion.appendChild(accordionBody)

    return [accordion, accordionHead, accordionBody]
}


function generateImage(genStart, genEnd, accordionBody) {

    for(let i = genStart;i<=genEnd;i++){
        const pokemon = document.createElement("img")
        url = baseURL + i+`.png`
        pokemon.setAttribute("src", url)
        accordionBody.appendChild(pokemon)
    }
}

function fetchPokemons(pokeObject){

    pokeObject.forEach((item)=>{
        let genStart = item.start
        let genEnd = item.end
        let heading = item.gen

        const [accordion, accordionHead, accordionBody] = createAccordion(heading);
        generateImage(genStart, genEnd, accordionBody);

    })
    clickListener()
}
fetchPokemons(pokeObject)


function clickListener(){
const selectAccordion = document.querySelectorAll(".accordion .accordionHead")

selectAccordion.forEach((accordion) => {
    const accordionBody = accordion.nextElementSibling
    
    accordion.addEventListener("click", () => {

    accordionBody.classList.toggle("accordion-hide")
    accordionBody.classList.toggle("accordion-show")

    })

})
}
