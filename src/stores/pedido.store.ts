import { create } from 'zustand';
import type { Pedido, PedidoCreateInput } from '../types/pedido';

type PedidoStore = {
  pedido: Pedido | null;
  setPedido: (data: PedidoCreateInput) => void;
};

const usePedidoStore = create<PedidoStore>()((set) => ({
  pedido: null,

  setPedido: (data) => {
    const pedido = {
      ...data,
      cantidadPersonas: parseInt(data.cantidadPersonas),
    };

    set({ pedido });
  },
}));

export default usePedidoStore;
