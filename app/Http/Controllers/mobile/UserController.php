<?php

namespace App\Http\Controllers\mobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUser($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function editUser(Request $request, $id)
    {
        $user = User::find($id);
        $this->validate(
            $request,
            [
                'name' => 'required|min:3|max:30',
                'phoneNumber' => 'required',
            ],
            [
                'name.required' => 'Bạn phải nhập tên người dùng',
                'phoneNumber.required' => 'Bạn phải nhập số điện thoại',
            ]
        );
        $user->name = $request->name;
        $user->gender = $request->gender;
        $user->phone_number = $request->phoneNumber;
        $user->avatar_link = $request->avatarLink;
        $user->dob = $request->dob;
        $user->save();
        return response()->json(['message' => 'Cập nhật thành công!', 'status' => 200]);
    }

    public function uploadAvatar(Request $request)
    {
        $base64 = $request->base64;
        $fileName = $request->fileName;
        file_put_contents('image/avatar/'.$fileName, base64_decode($base64));

        return response()->json(['message' => 'Tải ảnh thành công!', 'status' => 200, 'fileName' => $fileName]);
    }
}
