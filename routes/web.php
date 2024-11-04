<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalculatorController;

Route::get('/', [CalculatorController::class, 'index'])->name('home');
Route::post('/calculate', [CalculatorController::class, 'calculate'])->name('calculate');