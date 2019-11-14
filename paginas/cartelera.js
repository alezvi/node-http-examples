let peliculas = require('../data/movies.json') 

let listadoDePeliculas = peliculas.map(function (movie) {
    return `
        ${movie.title} - Duracion: ${movie.length}"
        Reproducciones ${movie.views}
        Rating ${movie.rating}
    `
}).join('<br>')

let pagina = `
<h1>Cartelera</h1>

<h3>Listado de peliculas (${peliculas.length})</h3>

${listadoDePeliculas}

<h5>Otros datos</h5>
`

module.exports = pagina