from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from db import get_connection # db.py may help here

router = APIRouter()

class UserLogin(BaseModel):
    username: str
    password: str

@router.post("/login") # Login Route
def login(user: UserLogin):
    conn = get_connection()
    c = conn.cursor()
    c.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        (user.username, user.password)
    )
    record = c.fetchone()
    conn.close()
    if record:
        return {"message": "Login successful"} # Return 200 value
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
