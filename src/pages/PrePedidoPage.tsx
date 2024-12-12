import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { tiposMasa, tiposRelleno } from '../constants/mock-data';
import { PedidoCreateInput } from '../types/pedido';
import usePedidoStore from '../stores/pedido.store';

const initialState: PedidoCreateInput = {
  nombre: '',
  direccion: '',
  tipoMasa: '',
  tipoRelleno: '',
  cantidadPersonas: '',
  color: '',
  tematica: '',
  fechaRecepcion: new Date().toISOString().split('T')[0],
};

const PrePedidoPage = () => {
  const { setPedido } = usePedidoStore();
  const navigate = useNavigate();
  const location = useLocation();

  const pedidoPrevio = location.state?.pedido;

  const [formData, setFormData] = useState<PedidoCreateInput>(
    pedidoPrevio || initialState
  );

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.nombre ||
      !formData.direccion ||
      !formData.tipoMasa ||
      !formData.tipoRelleno ||
      !formData.cantidadPersonas ||
      !formData.color ||
      !formData.tematica ||
      !formData.fechaRecepcion
    ) {
      alert('Por favor, llena todos los campos');
      return;
    }

    console.log(formData);

    setPedido(formData);

    navigate('/pedido', { state: { pedido: formData } });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl w-full">
        <div className="shadow p-4 my-4 mx-2 lg:mb-0 rounded-lg border">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre">Nombre del Cliente</label>
              <input
                type="text"
                className="border rounded-lg h-10 p-2"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="direccion">Dirección</label>
              <textarea
                className="border rounded-lg p-2 resize-none"
                id="direccion"
                value={formData.direccion}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tipoMasa">Tipo de Masa</label>
              <select
                id="tipoMasa"
                className="border rounded-lg p-2"
                value={formData.tipoMasa}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {tiposMasa.map((tipo) => (
                  <option key={`${tipo.id}-tipo-masa`} value={tipo.nombre}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tipoRelleno">Tipos de Relleno</label>
              <select
                id="tipoRelleno"
                className="border rounded-lg p-2"
                value={formData.tipoRelleno}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {tiposRelleno.map((tipo) => (
                  <option key={`${tipo.id}-tipo-relleno`} value={tipo.nombre}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cantidadPersonas">Cantidad de Personas</label>
              <input
                type="text"
                className="border rounded-lg h-10 p-2"
                id="cantidadPersonas"
                value={formData.cantidadPersonas}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="border rounded-lg h-10 p-2"
                id="color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tematica">Temática</label>
              <input
                type="text"
                className="border rounded-lg h-10 p-2"
                id="tematica"
                value={formData.tematica}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="fechaRecepcion">Fecha de Recepción</label>
              <input
                type="date"
                className="border rounded-lg h-10 p-2"
                id="fechaRecepcion"
                value={formData.fechaRecepcion}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center mt-2">
              <button className="bg-green-500 hover:bg-green-700 transition py-2 px-4 rounded-full text-white w-full">
                Registrar pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrePedidoPage;
