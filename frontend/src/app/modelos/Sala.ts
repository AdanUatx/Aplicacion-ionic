export class Sala{
  salaID: number;
  num_sala: number;
  asientos: number;
  fecha_alta: string;
  fecha_modificacion: string;
  registro_activo: boolean;


  constructor() {
    this.salaID = null;
    this.num_sala = null;
    this.asientos= null;
    this.fecha_alta = null;
    this.fecha_modificacion = null;
    this.registro_activo = null;
  }

}
