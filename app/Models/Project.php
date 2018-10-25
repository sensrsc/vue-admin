<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $primaryKey = 'project_id';
    protected $guarded = ['project_id', 'created_at', 'updated_at'];
}
