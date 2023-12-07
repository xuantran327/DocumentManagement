<?php

namespace App\Http\Controllers\mobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Str;
// use Illuminate\Support\Facades\Date;
// use Illuminate\Support\Carbon;
// use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate(
            $request,
            [
                'email' => 'required|email:filter',
                'password' => 'required|min:6|max:25',
            ],
            [
				'email.required' => 'Bạn phải nhập email',
				'password.required' => 'Bạn phải nhập mật khẩu',
			]
        );

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = Str::random(64);
            $user->api_token = $token;
            // $expiresAt = Carbon::now('Asia/Ho_Chi_Minh')->addWeek();
            $user->save();

            return response()->json([
                'message' => 'Đăng nhập thành công!',
                'status' => 200,
                'api_token' => $token,
                'user_id' => Auth::user()->id,
                // 'roleId' => Auth::user()->role_id,
                // 'name' => Auth::user()->name,
            ]);
        } else {
            return response()->json(['message' => 'Đăng nhập không thành công, mời nhập lại!', 'status' => 401]);
        }
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $token = $request->api_token;
        if (hash_equals($token, $user->api_token)) {
            $user->api_token = null;
            $user->save();
            return response()->json(['message' => 'Đăng xuất thành công!', 'status' => 200]);
        } else {
            return response()->json(['message' => 'Token không hợp lệ!', 'status' => 401]);
        }
    }
}
