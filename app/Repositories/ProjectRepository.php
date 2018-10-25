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
        return $this->project->create($attributes);
    }
}
