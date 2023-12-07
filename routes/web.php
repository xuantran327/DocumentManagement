<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\DocumentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('test', [TestController::class,'test']);

Route::get('/', function () {
    return view('admin.login');
});
Route::get('admin/login', [AuthController::class,'getLogin']);
Route::post('admin/login', [AuthController::class,'postLogin']);
Route::get('admin/logout', [AuthController::class,'getLogout']);

Route::group(['prefix' => 'admin', 'middleware' => 'adminLogin'], function () {
    Route::get('/', [DocumentController::class,'getList']);
    Route::get('home', [DocumentController::class,'getList']);
	Route::group(['prefix' => 'cong-van'], function () {
        Route::get('/', [DocumentController::class,'getList']);
		Route::get('list', [DocumentController::class,'getList']);

        Route::get('add', [DocumentController::class,'getAdd']);
		Route::post('add', [DocumentController::class,'postAdd']);

		Route::get('edit/{id}', [DocumentController::class,'getEdit']);
		Route::post('edit/{id}', [DocumentController::class,'postEdit']);

		Route::get('delete/{id}', [DocumentController::class,'getDelete']);
	});
});