<?php

namespace App\Http\Controllers\api\v1\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;


class UserInfoController extends Controller
{
    public function getUser()
    {
        return Auth::user();
    }
}
