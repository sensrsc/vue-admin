<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\MemberRepository;

class MemberController extends Controller
{
    private $member;

    public function __construct(MemberRepository $member)
    {
        $this->member = $member;
    }

    public function login(Request $request)
    {
        return $this->member->login($request->all());
    }
}
