const fs = require ("node:fs/promises");
const path = require ("node:path");

async function leerArchivoJson(ruta) {
    const texto = await fs.readFile(ruta, "utf-8");
    return JSON.parse(texto);
    
}

async function escribirTexto( ruta, contenido){
    await fs.mkdir(path.dirname(ruta), {resursive: true});
    await fs.writeFile(ruta, contenido, "utf-8");
}

module.exports = {
    leerArchivoJson,
    escribirTexto
}