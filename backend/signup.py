from fastapi import APIRouter, HTTPException 
from pydantic import BaseModel
from db import get_connection, create_tables # See db.py for more info on these functions

router = APIRouter()

# Imports from db to create tables (See db.py)
create_tables()

class User(BaseModel):
    username: str
    password: str

@router.post("/signup") # Signup route (DB structure in db.py)
def signup(user: User):
    conn = get_connection()
    c = conn.cursor()
    try:
        c.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            (user.username, user.password)
        )
        conn.commit()
    except Exception as e:
        raise HTTPException(status_code=400, detail="Signup failed: " + str(e))
    finally:
        conn.close()
    return {"message": "User signed up successfully"} # Return 200 value
