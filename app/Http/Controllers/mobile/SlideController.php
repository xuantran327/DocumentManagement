<?php

namespace App\Http\Controllers\mobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slide;

class SlideController extends Controller
{
    public function getList()
    {
        $slide = Slide::all();
        return response()->json($slide);
    }
}
