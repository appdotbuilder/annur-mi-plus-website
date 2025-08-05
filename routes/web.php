<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\StudentRegistrationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', [HomeController::class, 'index'])->name('home');

// Student registration routes (public)
Route::controller(StudentRegistrationController::class)->group(function () {
    Route::get('/pendaftaran', 'create')->name('student-registration.create');
    Route::post('/pendaftaran', 'store')->name('student-registration.store');
    Route::get('/pendaftaran/sukses/{registration}', 'show')->name('student-registration.success');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
