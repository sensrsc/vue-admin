<?php

namespace App\Repositories;

use App\Models\Member;

class MemberRepository
{
    private $member;

    public function __construct(Member $member)
    {
        $this->member = $member;
    }

    public function login($attributes)
    {
        $condition = [
            'email' => $attributes['email'],
            'password' => sha1($attributes['password'])
        ];

        if ($this->member->where($condition)->exists()) {
            return $this->member->where($condition)->first();
        }
        return response()->json([], 401);
    }
}
