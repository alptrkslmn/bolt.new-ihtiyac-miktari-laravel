import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AreaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAreaCalculated: (area: string) => void;
}

function AreaCalculatorModal({ isOpen, onClose, onAreaCalculated }: AreaCalculatorModalProps) {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  if (!isOpen) return null;

  const calculateArea = () => {
    const area = (parseFloat(width) || 0) * (parseFloat(length) || 0);
    onAreaCalculated(area.toString());
    onClose();
  };

  const handleClear = () => {
    setWidth('');
    setLength('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-ubuntu">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Alan Hesaplama</h2>
          <p className="text-gray-600 mb-6">
            Alan ölçülerinizi metre cinsinden girip, alanınızın m² boyutunuzu öğrenebilirsiniz.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="0"
              className="w-24 p-2 border rounded-lg text-center"
            />
            <span className="text-xl">×</span>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="0"
              className="w-24 p-2 border rounded-lg text-center"
            />
            <span className="text-xl">=</span>
            <div className="flex items-center">
              <span className="text-xl font-semibold">
                {((parseFloat(width) || 0) * (parseFloat(length) || 0)).toFixed(2)}
              </span>
              <span className="ml-1">m²</span>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Temizle
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              İptal
            </button>
            <button
              onClick={calculateArea}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Hesapla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaCalculatorModal;