
//Globales
const url = 'https://api.adviceslip.com/advice'
const titulo_id = document.querySelector('.titulo-advice')
const adviceP = document.querySelector('.advice')
const random = document.querySelector('#random')


//Al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    consultarAPI()
})

random.addEventListener('click', generarRandomAdvice)

//Consulta a la API
const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    generarAdvice(resultado.slip)
}

//Funcion que imprime en el dom el contenido
function generarAdvice(datos){
    const { advice, id } = datos
    titulo_id.textContent = `Advice #${id}`
    adviceP.textContent = `"${advice}"`
}


function generarRandomAdvice(){
    let numero = Math.round(Math.random()*100)
    //Consulta a la API
    const consultarAPIRandom = async () => {
        const urlID = `https://api.adviceslip.com/advice/${numero}`
        const respuesta = await fetch(urlID)
        const resultado = await respuesta.json()
        generarAdvice(resultado.slip)
    }
consultarAPIRandom()
}