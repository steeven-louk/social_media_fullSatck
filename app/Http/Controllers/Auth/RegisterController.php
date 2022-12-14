<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(Request  $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            // 'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if($validator -> fails()){
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */ 
    protected function create( Request $request)
    {
        $user = User::create([
            // 'name' => $data['name'],
            // 'slug' =>Str::slug($data['name']),
            // 'email' => $data['email'],
            // 'password' => Hash::make($data['password']),

            'name' => $request -> name,
            'slug' =>Str::slug($request -> name),
            'email' => $request -> email,
            'password' => Hash::make($request -> password),
        ]);


        $token = $user -> createToken($user->email. '_token')-> plainTextToken;

        return response()->json([
            'status' => 200,
            'username' => $user->name,
            'slug' => $user->slug,
            'id' => $user->id,
            'token' => $token,
            'message' => "Registered Successfully",
        ]);
    }
}
