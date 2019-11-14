
function getContent(peliculas) {
    let listadoDePeliculas = peliculas.map(function (movie) {
        return `
            ${movie.title} - Duracion: ${movie.length}"
            Reproducciones ${movie.views}
            Rating ${movie.rating}
        `
    }).join('<br>')

    let content = `
    <h1>Cartelera</h1>

    <h3>Listado de peliculas (${peliculas.length})</h3>

    ${listadoDePeliculas}

    <h5>Otros datos</h5>
    `

    return content
}


module.exports = getContent