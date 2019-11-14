let peliculas = require('../data/movies.json') 
let helpers = require('../helpers.js')
let pagina = require('./listado-de-peliculas')

peliculas = helpers.peliculasMasVotadas(peliculas)

content = pagina(peliculas) 

module.exports = content