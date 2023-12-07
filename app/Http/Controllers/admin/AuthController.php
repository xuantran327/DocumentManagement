<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function getLogin() {
        return view('admin.login');
    }

    public function postLogin(Request $request) {
        $this->validate($request,
			[
				'email' => 'required',
				'password' => 'required|min:6|max:25',
			],
			[
				'email.required' => 'Bạn phải nhập email',
				'password.required' => 'Bạn phải nhập mật khẩu',
				'password.min' => 'Bạn phải nhập mật khẩu lớn hơn, từ 6 đến 25 ký tự',
				'password.max' => 'Bạn phải nhập mật khẩu nhỏ hơn, từ 6 đến 25 ký tự',
			]

		);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
			return redirect('admin/');
		} else {
			return redirect('admin/login')->with('error', 'Đăng nhập không thành công, mời nhập lại!');
		}
    }

    public function getLogout() {
		Auth::logout();
		return redirect('admin/login')->with('notification', 'Đăng xuất thành công');
	}
}
