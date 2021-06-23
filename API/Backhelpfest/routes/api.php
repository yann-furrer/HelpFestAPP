<?php

use App\Http\Controllers\AddcommandController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProduitallController;
use App\Http\Controllers\ProduitsoloController;
use App\Http\Controllers\CommandController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BoutonController;
use App\Http\Controllers\TenteController;
use App\Http\Controllers\QrcodeController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//routes authentification

Route::middleware('auth:sanctum')->get('/user', function () {
    
});

Route::post('/register', [AuthController::class, 'register']);

// Routes Api Post 

Route::post('product', [ProductController::class, 'creeProduct']);  

Route::post('addcommand', [AddcommandController::class, 'addCommand']);  

// Routes Api Get

Route::get('qrcode', [UserController::class, 'index', 'show']);

Route::get('product', [ProduitallController::class, 'index', 'show']);

// Routes apiResource 

Route::apiResource('produit', ProduitallController::class);

Route::apiResource('command', CommandController::class);

Route::apiResource('user', UserController::class);

Route::apiResource('tente', TenteController::class);

Route::apiResource('statut', BoutonController::class);

