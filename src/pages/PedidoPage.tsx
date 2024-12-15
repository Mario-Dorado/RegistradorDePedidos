import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import usePedidoStore from '../stores/pedido.store';

const PedidoPage = () => {
  const pedido = usePedidoStore((state) => state.pedido);
  const imageRef = useRef(null);

  if (!pedido) return <div>No hay pedido</div>;

  const handleDownloadImage = async () => {
    const element = imageRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      scrollX: 0,
      scrollY: 0,
    });

    const imgData = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'pedido.png';
    link.click();
  };

  return (
    <div className='flex flex-col items-center py-8'>
      <div
        ref={imageRef}
        className='max-w-xl w-full shadow p-6 rounded-lg border bg-white mb-4'
        style={{
          maxHeight: '800px',
          overflow: 'hidden',
        }}
      >
        <div className='flex justify-center mb-6'>
          <img src='/logo-nobg.png' alt='Logo' className='h-24' />
        </div>
        <h2 className='text-2xl font-bold text-center mb-6'>Detalles del Pedido</h2>

        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <span className='font-semibold'>Nombre del Cliente:</span>
            <span>{pedido.nombre}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Dirección:</span>
            <span>{pedido.direccion}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Tipo de Masa:</span>
            <span>{pedido.tipoMasa}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Tipo de Relleno:</span>
            <span>{pedido.tipoRelleno}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Cantidad de Personas:</span>
            <span>{pedido.cantidadPersonas}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Color:</span>
            <span>{pedido.color}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Temática:</span>
            <span>{pedido.tematica}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Fecha de Recepción del Pedido:</span>
            <span>{pedido.fechaRecepcion}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Fecha de Entrega del Pedido:</span>
            <span>{pedido.fechaEntrega}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>Hora de Entrega del Pedido:</span>
            <span>{pedido.horaEntrega}</span>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <button
          className='bg-pink-600 hover:bg-pink-400 text-white py-2 px-4 rounded-full transition'
          onClick={handleDownloadImage}
        >Descargar como Imagen
        </button>

        <Link
          to="/"
          state={{ pedido: pedido }}
          className='bg-pink-600 hover:bg-pink-400 text-white py-2 px-4 rounded-full transition'
        >Modificar datos
        </Link>

      </div>
    </div>
  );
};

export default PedidoPage;
