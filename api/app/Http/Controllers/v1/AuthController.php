<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\V1\Controller;
use App\Http\Requests\V1\LoginRequest;
use App\Http\Resources\V1\UserResource;
use App\Models\V1\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(LoginRequest $request)
    {
        // return "test";
        $validatedCredentials = $request->validated();
        $authenticated = Auth::attempt(['email' => $validatedCredentials['email'], 'password' => $validatedCredentials["password"]]);

        if (!$authenticated) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $token =  auth()->user()->createToken('authToken');

        $user = UserResource::make(auth()->user());

        return response()->json(["user" => $user, "token" => $token->plainTextToken ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(RegisterRequest $request)
    {
        //
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function user(Request $request)
    {
        $user = UserResource::make(auth()->user());
        return response()->json(["user" => $user]);
    }
}
