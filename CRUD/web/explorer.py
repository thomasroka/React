from fastapi import APIRouter, HTTPException, Header
from models.explorer import Explorer
from service import explorer as service
from service import auth

router = APIRouter()
def require_user(token:str):
    user = auth.get_user(token)
    if not user:
        raise HTTPException("401, :Invalid token!!!")
    return user
 
@router.get("/explorers")

def get_all_explorers():
    return service.get_all()
 
 
@router.get("/explorers/{name}")
def get_explorer(name: str):
    explorer = service.get_one(name)
 
    if not explorer:
        raise HTTPException(404, "Explorer not found")
 
    return explorer
 
 
@router.post("/explorers")
def create_explorer(explorer: dict,token:str=Header()):
    require_user(token)

    return service.create(explorer)
 
 
@router.put("/explorers/{name}")
def update_explorer(name: str, explorer: dict,token:str=Header()):
    require_user(token)
    updated = service.update(name, explorer)
    
    if not updated:
        raise HTTPException(404, "Explorer not found")
 
    return updated
 
 
@router.delete("/explorers/{name}")
def delete_explorer(name: str,token:str=Header()):
    require_user(token)
    success = service.delete(name)
 
    if not success:
        raise HTTPException(404, "Explorer not found")
 
    return {"deleted": True}