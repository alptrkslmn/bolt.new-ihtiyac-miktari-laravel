@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-ubuntu">
    <div class="w-full max-w-xl bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-2xl font-bold text-gray-800 mb-8">İHTİYAÇ MİKTARI</h1>

        <form action="{{ route('calculate') }}" method="POST" class="space-y-6">
            @csrf
            <div class="flex items-center gap-4 flex-wrap">
                <div class="flex-1 min-w-[200px] relative">
                    <button type="button" 
                            onclick="openAreaCalculator()"
                            class="w-full relative text-left">
                        <input type="text" 
                               name="calculated_area" 
                               id="calculated_area"
                               readonly 
                               placeholder="Alan Hesaplayınız"
                               class="w-full p-3 border border-red-200 rounded-lg pl-12 cursor-pointer">
                        <i class="calculator-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </button>
                    <button type="button" 
                            onclick="clearArea()" 
                            class="clear-button hidden absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <i class="x-icon"></i>
                    </button>
                </div>
                
                <span class="text-lg font-medium text-gray-600">veya</span>
                
                <div class="flex-1 min-w-[200px]">
                    <div class="flex items-center">
                        <input type="number" 
                               name="manual_area" 
                               id="manual_area"
                               placeholder="0"
                               class="w-full p-3 border rounded-lg text-center"
                               oninput="calculateFromManualArea(this.value)">
                        <span class="ml-2 text-lg text-gray-600">m²</span>
                    </div>
                </div>
            </div>

            <p class="text-gray-600 text-sm">
                Ürün satışlarımız kutu adeti üzerinden yapılmaktadır.
                Alan hesaplaması üzerinden miktar belirlenirken, çıkan
                alan metrajına % 10 fire payı eklenip, kutu adetine
                dönüştürülmektedir.
            </p>

            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4">Kutu Adeti</h2>
                <div class="flex items-center gap-4">
                    <div class="flex items-center border rounded-lg">
                        <button type="button" 
                                onclick="decreaseQuantity()" 
                                class="p-4 hover:bg-gray-100">
                            <i class="minus-icon"></i>
                        </button>
                        <input type="number" 
                               name="quantity" 
                               id="quantity"
                               value="1"
                               class="w-20 text-center border-x p-2"
                               oninput="updatePrice()">
                        <button type="button" 
                                onclick="increaseQuantity()" 
                                class="p-4 hover:bg-gray-100">
                            <i class="plus-icon"></i>
                        </button>
                    </div>
                    
                    <div class="space-y-2">
                        <p class="text-gray-700">m² Fiyatı = {{ number_format(444.00, 2) }} TL</p>
                        <p class="text-gray-700">1 Kutu = 1.26 m² = {{ number_format(444.00 * 1.26, 2) }} TL</p>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <div class="flex items-center gap-2 mb-2">
                    <h2 class="text-2xl font-bold">Toplam Tutar</h2>
                    <span class="text-sm text-gray-600">(KDV Dahildir)</span>
                </div>
                <p class="text-4xl font-bold">
                    <span id="total_price">559.44</span> TL
                </p>
            </div>

            <p class="text-sm text-gray-500 mt-4">
                *Teslimat ücretleri fiyata dahil değildir, sepette eklenecektir.
                <br>
                15 m²'nin üzerindeki siparişlerde kargo bedeli alınmaz.
            </p>

            <button type="submit" 
                    class="w-full bg-red-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-red-700 transition-colors">
                SEPETE EKLE
            </button>
        </form>
    </div>
</div>

<!-- Area Calculator Modal -->
<div id="areaCalculatorModal" 
     class="fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4 z-50 font-ubuntu hidden">
    <div class="bg-white rounded-lg w-full max-w-md relative">
        <button onclick="closeAreaCalculator()" 
                class="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <i class="x-icon"></i>
        </button>

        <div class="p-6">
            <h2 class="text-xl font-semibold mb-4">Alan Hesaplama</h2>
            <p class="text-gray-600 mb-6">
                Alan ölçülerinizi metre cinsinden girip, alanınızın m² boyutunuzu öğrenebilirsiniz.
            </p>

            <div class="flex items-center gap-4 mb-6">
                <input type="number" 
                       id="width"
                       placeholder="0"
                       class="w-24 p-2 border rounded-lg text-center"
                       oninput="calculateArea()">
                <span class="text-xl">×</span>
                <input type="number" 
                       id="length"
                       placeholder="0"
                       class="w-24 p-2 border rounded-lg text-center"
                       oninput="calculateArea()">
                <span class="text-xl">=</span>
                <div class="flex items-center">
                    <span id="calculated_result" class="text-xl font-semibold">0.00</span>
                    <span class="ml-1">m²</span>
                </div>
            </div>

            <div class="flex justify-end gap-4">
                <button onclick="clearCalculator()" 
                        class="px-4 py-2 text-gray-600 hover:text-gray-800">
                    Temizle
                </button>
                <button onclick="closeAreaCalculator()" 
                        class="px-4 py-2 text-gray-600 hover:text-gray-800">
                    İptal
                </button>
                <button onclick="applyCalculatedArea()" 
                        class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Hesapla
                </button>
            </div>
        </div>
    </div>
</div>
@endsection