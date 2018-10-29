<?php

namespace App\Repositories;

use App\Models\Project;

class ProjectRepository
{
    private $project;

    public function __construct(Project $project)
    {
        $this->project = $project;
    }

    public function create($attributes)
    {
        if($this->project->create($attributes)) {
            return $this->project->all();
        }
        return 'fail';
    }

    public function index()
    {
        return $this->project->all();
    }
}
