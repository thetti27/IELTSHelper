<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This is where we register all the web routes for the application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group.
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Route for pricing page
Route::get('/pricing', function () {
    return view('pages.pricing');
})->name('pricing');

//Route for booking page
Route::get('/bookings', function () {
    return view('pages.bookings');
})->name('bookings');

//Route for About us page
Route::get('/about-us', function () {
    return view('pages.about-us');
})->name('about-us');

/*
//Route for Contact us page
Route::get('/contact-us', function () {
    return view('pages.contact-us');
})->name('contact-us');
*/


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


