<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\mobile\AuthController;
use App\Http\Controllers\mobile\SlideController;
use App\Http\Controllers\mobile\DocumentController;
use App\Http\Controllers\mobile\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('index', [TestController::class,'index']);
Route::post('login', [AuthController::class,'login']);
Route::post('logout', [AuthController::class,'logout'])->middleware('auth:api');

Route::get('slide', [SlideController::class,'getList']);

Route::get('new-document', [DocumentController::class,'getListNew']);
Route::get('document-list', [DocumentController::class,'getList']);
Route::get('document-list/{search}', [DocumentController::class,'getSearch']);
Route::get('document-detail/{id}', [DocumentController::class,'getDetail']);

Route::get('user/{id}', [UserController::class,'getUser']);
Route::patch('user/{id}', [UserController::class,'editUser']);
Route::post('upload-avatar', [UserController::class,'uploadAvatar']);
