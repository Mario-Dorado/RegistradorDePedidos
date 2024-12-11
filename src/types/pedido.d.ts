export type Pedido = {
  nombre: string;
  direccion: string;
  tipoMasa: string;
  tipoRelleno: string;
  cantidadPersonas: number;
  color: string;
  tematica: string;
  fechaRecepcion: string;
};

export type PedidoCreateInput = {
  nombre: string;
  direccion: string;
  tipoMasa: string;
  tipoRelleno: string;
  cantidadPersonas: string;
  color: string;
  tematica: string;
  fechaRecepcion: string;
};
