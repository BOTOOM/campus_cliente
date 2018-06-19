
import { EstadoCivil } from './estado_civil';
import { Genero } from './genero';

export class InfoPersona {
  PrimerNombre: string;
  SegundoNombre: string;
  PrimerApellido: string;
  SegundoApellido: string;
  FechaNacimiento: Date;
  Foto: number;
  Usuario: string;
  EstadoCivil: EstadoCivil;
  Genero: Genero;
}
