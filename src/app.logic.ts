import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage: string = "";
const header = `
==========================================
                Tabla del ${base} 
==========================================\n
`;
let finalMessage = "";
for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

finalMessage = header + outputMessage;

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`outputs/tabla-${base}.txt`, finalMessage);
console.log(`Archivo tabla-${base}.txt creado en la carpeta outputs`);

if (showTable) console.log(finalMessage);
