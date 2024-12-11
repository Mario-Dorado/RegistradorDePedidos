import usePedidoStore from '../stores/pedido.store';

const PedidoPage = () => {
  const pedido = usePedidoStore((state) => state.pedido);

  if (!pedido) return <div>No hay pedido</div>;

  return <div>{JSON.stringify(pedido, null, 1)}</div>;
};

export default PedidoPage;
