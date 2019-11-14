const fs = require('fs')

function getContent(req, res) {
    let txt = ''

    switch (req.url) {
        case '/':
            txt = fs.readFileSync('./paginas/home.txt')
            break;

        case '/cartelera':
            txt = require('./paginas/cartelera.js')
            break;

        case '/mas-votadas':
            txt = require('./paginas/mas-votadas.js')
            break;
        
        case '/contacto':
            txt = fs.readFileSync('./paginas/contacto.txt')
            break;
        
        default:
            txt = 'not found'
    }

    return txt
}

module.exports = getContent
