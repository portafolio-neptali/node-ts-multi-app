import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    //Dependency injection
  }
  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log(
        `Archivo ${fileName}.txt creado en la carpeta ${fileDestination}`
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
