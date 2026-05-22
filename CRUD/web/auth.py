from fastapi import APIRouter, HTTPException
from models.users import User
from service import auth
 
router = APIRouter()
 
 
@router.post("/login")
def login(user: User):
 
    token = auth.login(user.username, user.password)
 
    if not token:
        raise HTTPException(401, "Invalid credentials")
 
    return {
        "token": token,
        "username": user.username
    }