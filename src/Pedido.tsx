import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface FormData {
  nombre: string;
  direccion: string;
  masa: string;
  relleno: string;
  cantidad: string;
  color: string;
  tematica: string;
  fecha: string;
}

const Pedido: React.FC = () => {
  const location = useLocation();
  const formData = location.state as FormData;
  const contentRef = useRef<HTMLDivElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState<FormData>(formData);

  if (!formData) {
    return <p>No hay datos del pedido. Regresa al registro.</p>;
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    setEditableData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    Object.assign(formData, editableData);
  };

  const downloadAsImage = async () => {
    if (!contentRef.current) return;
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(contentRef.current, {
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      width: contentRef.current.scrollWidth,
      height: contentRef.current.scrollHeight,
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'pedido.png';
    link.click();
  };

  const downloadAsPDF = async () => {
    if (!contentRef.current) return;
    const { default: html2canvas } = await import('html2canvas');
    const { jsPDF } = await import('jspdf');
    const canvas = await html2canvas(contentRef.current, {
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      width: contentRef.current.scrollWidth,
      height: contentRef.current.scrollHeight,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('pedido.pdf');
  };

  return (
    <main className="flex flex-col bg-orange-50">
      <div ref={contentRef} className="bg-orange-50 p-6 rounded-md shadow-xl w-full sm:w-[50%] md:w-[50%] lg:w-[35%] mx-auto mt-20">
        <div className="flex justify-center mb-6">
          <img src="/publics/Logo-NoBG.png" alt="Logo" className="h-20" />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Detalles del Pedido</h2>

        <div className="space-y-6 text-lg">
          {Object.entries(isEditing ? editableData : formData).map(([key, value]) => (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
              {isEditing ? (
                <input
                  type="text"
                  value={value as string}
                  onChange={(e) => handleEditChange(e, key as keyof FormData)}
                  className="block w-full mt-2 px-4 py-2 rounded-md border border-gray-300"
                />
              ) : (
                <p className="text-lg">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <img src="/publics/Logo-NoBG.png" alt="Logo" className="h-20" />
        </div>
      </div>

      <div className="mt-6 mb-8 flex justify-center space-x-4">
        <button
          onClick={downloadAsImage}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Descargar como Imagen
        </button>
        <button
          onClick={downloadAsPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Descargar como PDF
        </button>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
          >
            Modificar detalles
          </button>
        )}

        {isEditing && (
          <button
            onClick={handleSaveChanges}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Guardar Cambios
          </button>
        )}
      </div>
    </main>
  );
};

export default Pedido;
