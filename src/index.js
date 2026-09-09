const path = require("node:path");
const pc = require("picocolors");


const {leerArchivoJson, escribirTexto} = require ("./archivos.js");
const {crearInforme} = require("./juegos.js");

const rutaSalida = path.join(__dirname, "..", "salida","catalogo-juegos.txt");
const rutaDatos = path.join(__dirname, "..", "datos","juegos.json");

async function main() {
    try{
        const juegos = await leerArchivoJson(rutaDatos);
        const informe = crearInforme(juegos);
        await escribirTexto(rutaSalida, informe);

        console.log(informe);
        console.log(pc.green(`informe generado en: ${rutaSalida}`));
    } catch (error){
        console.log(pc.red(`no se pudo generar el informe: ${error.message}`));
        process.exitCode = 1;
    }
    
}

main(); 