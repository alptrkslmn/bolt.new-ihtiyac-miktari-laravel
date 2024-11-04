<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function index()
    {
        return view('calculator');
    }

    public function calculate(Request $request)
    {
        $request->validate([
            'calculated_area' => 'nullable|numeric',
            'manual_area' => 'nullable|numeric',
            'quantity' => 'required|integer|min:1'
        ]);

        // Add your cart logic here
        
        return redirect()->back()->with('success', 'Ürün sepete eklendi!');
    }
}