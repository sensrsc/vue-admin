<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ProjectRepository;

class ProjectController extends Controller
{
    private $project;

    public function __construct(ProjectRepository $project)
    {
        $this->project = $project;
    }

    public function create(Request $request)
    {
        return $this->project->create($request->all());
    }

    public function index(Request $request)
    {
        return $this->project->index();
    }
}
