<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $primaryKey = 'member_id';
    protected $guarded = ['member_id', 'created_at', 'updated_at'];
}
