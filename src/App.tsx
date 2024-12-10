import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Pedido from './Pedido';

const InputField: React.FC<{
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ id, label, type, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
      required={required}
    />
  </div>
);

const RegistroPedido: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    masa: '',
    relleno: '',
    cantidad: '',
    color: '',
    tematica: '',
    fecha: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pedido', { state: formData });
  };

  return (
    <main className="container mx-auto py-8 bg-orange-50">
      <h2 className="text-xl font-semibold mb-4">Registro de Pedido</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 p-6 bg-orange-50 shadow-xl rounded-md">
        <InputField
          id="nombre"
          label="Nombre del Cliente"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <InputField
          id="direccion"
          label="Dirección"
          type="text"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <InputField
          id="masa"
          label="Tipo de Masa"
          type="text"
          value={formData.masa}
          onChange={handleChange}
          required
        />
        <InputField
          id="relleno"
          label="Tipo de Relleno"
          type="text"
          value={formData.relleno}
          onChange={handleChange}
          required
        />
        <InputField
          id="cantidad"
          label="Cantidad de Personas de la torta"
          type="number"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />
        <InputField
          id="color"
          label="Colores"
          type="text"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <InputField
          id="tematica"
          label="Temática"
          type="text"
          value={formData.tematica}
          onChange={handleChange}
          required
        />
        <InputField
          id="fecha"
          label="Fecha de Recepción"
          type="date"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Registrar Pedido
        </button>
      </form>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="grid grid-rows-[1fr_auto] h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<RegistroPedido />}/>
          <Route path="/pedido" element={<Pedido />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;