function formatearDisponibilidad (juegos){
    const disponibilidad = juegos.disponible ? "juego disponible" : "juego no disponible";
    return `${juegos.titulo}|${juegos.anio}|${juegos.editorial}| rango de jugadores:${juegos.jugadoresMin}-${juegos.jugadoresMax}`;
}

function crearInforme(juegos){
    const lineas = juegos.map(formatearDisponibilidad);
    return `CATÁLOGO DE JUEGOS 
    ================
    Cantidad de juegos: ${juegos.length}
    ${lineas.join("\n")}`;

}

module.exports={ crearInforme }