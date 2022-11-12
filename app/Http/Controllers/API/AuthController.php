<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' =>'required|string',
            'email' =>'required|unique:users,email|max:191',
            'password' =>'required|min:8'
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=> $validator->messages(),
            ]);
        }
        else{
            $user = User::create([
                'name'=> $request->name,
                'slug' => Str::slug($request->name, '-'),
                'email'=> $request->email,
                'password'=> Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_token')->plainTextToken;

            return response()-> json([
                'status'=> 200,
                'username'=> $user->name,
                'token'=> $token,
                'message'=> 'Registered Successfully!',
            ]);
        }
    }
}
