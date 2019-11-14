function peliculasMasVotadas(peliculas) {
    return peliculas.sort(function (a, b) {
        if (a.rating > b.rating) {
            return 1;
        }
    
        if (a.rating < b.rating) {
            return -1;
        }
    
        return 0;
    }).reverse()
}

module.exports = {
    peliculasMasVotadas
}