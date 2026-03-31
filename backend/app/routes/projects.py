import json
from pathlib import Path
from fastapi import APIRouter, HTTPException
from app.schemas import Project
from typing import List

router = APIRouter(prefix="/api/projects", tags=["projects"])

DATA_PATH = Path(__file__).parent.parent / "data" / "projects.json"


def _load_projects() -> List[dict]:
    with open(DATA_PATH, "r") as f:
        return json.load(f)


@router.get("/", response_model=List[Project])
async def get_projects():
    """Return all projects."""
    return _load_projects()


@router.get("/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Return a single project by ID."""
    projects = _load_projects()
    for project in projects:
        if project["id"] == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")
