import React, { useState, useEffect } from 'react';
import { Calculator, Minus, Plus, X } from 'lucide-react';
import AreaCalculatorModal from './components/AreaCalculatorModal';

function App() {
  const [area, setArea] = useState<string>('');
  const [manualArea, setManualArea] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(559.44);
  const [showModal, setShowModal] = useState(false);
  
  const PRICE_PER_M2 = 444.00;
  const BOX_SIZE_M2 = 1.26;
  const BOX_PRICE = PRICE_PER_M2 * BOX_SIZE_M2;

  useEffect(() => {
    setTotalPrice(quantity * BOX_PRICE);
  }, [quantity]);

  const handleAreaChange = (value: string) => {
    setArea(value);
    setManualArea('');
    if (value) {
      const calculatedArea = parseFloat(value);
      const boxesNeeded = Math.ceil((calculatedArea * 1.1) / BOX_SIZE_M2);
      setQuantity(boxesNeeded);
    }
  };

  const handleManualAreaChange = (value: string) => {
    setManualArea(value);
    setArea('');
    if (value) {
      const calculatedArea = parseFloat(value);
      const boxesNeeded = Math.ceil((calculatedArea * 1.1) / BOX_SIZE_M2);
      setQuantity(boxesNeeded);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      setArea('');
      setManualArea('');
    }
  };

  const clearArea = () => {
    setArea('');
    setManualArea('');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-ubuntu">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">İHTİYAÇ MİKTARI</h1>

          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex-1 min-w-[200px] relative">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full relative text-left"
                >
                  <input
                    type="text"
                    value={area}
                    readOnly
                    placeholder="Alan Hesaplayınız"
                    className="w-full p-3 border border-red-200 rounded-lg pl-12 cursor-pointer"
                  />
                  <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                </button>
                {area && (
                  <button
                    onClick={clearArea}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              
              <span className="text-lg font-medium text-gray-600">veya</span>
              
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center">
                  <input
                    type="number"
                    value={manualArea}
                    onChange={(e) => handleManualAreaChange(e.target.value)}
                    placeholder="0"
                    className="w-full p-3 border rounded-lg text-center"
                  />
                  <span className="ml-2 text-lg text-gray-600">m²</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              Ürün satışlarımız kutu adeti üzerinden yapılmaktadır.
              Alan hesaplaması üzerinden miktar belirlenirken, çıkan
              alan metrajına % 10 fire payı eklenip, kutu adetine
              dönüştürülmektedir.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Kutu Adeti</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-4 hover:bg-gray-100"
                  >
                    <Minus size={20} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-20 text-center border-x p-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-4 hover:bg-gray-100"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700">m² Fiyatı = {PRICE_PER_M2.toFixed(2)} TL</p>
                  <p className="text-gray-700">1 Kutu = {BOX_SIZE_M2} m² = {BOX_PRICE.toFixed(2)} TL</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">Toplam Tutar</h2>
                <span className="text-sm text-gray-600">(KDV Dahildir)</span>
              </div>
              <p className="text-4xl font-bold">{totalPrice.toFixed(2)} TL</p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              *Teslimat ücretleri fiyata dahil değildir, sepette eklenecektir.
              <br />
              15 m²'nin üzerindeki siparişlerde kargo bedeli alınmaz.
            </p>

            <button className="w-full bg-red-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-red-700 transition-colors">
              SEPETE EKLE
            </button>
          </div>
        </div>
      </div>

      <AreaCalculatorModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAreaCalculated={handleAreaChange}
      />
    </>
  );
}

export default App;