<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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
Route::group(['middleware' => ['auth:sanctum']], function (){


    Route::post('/logout', [AuthController::class, 'logout']);

});
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/ok', function (){

 $response = $this->call('POST', 'xml');

});