<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index() {
        return response()->json(['status' => 401]);
    }
    public function test() {
        return phpinfo();
    }
}
