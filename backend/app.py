from fastapi import FastAPI
import os

from signup import router as signup_router
from login import router as login_router

app = FastAPI()

app.include_router(signup_router)
app.include_router(login_router)

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI on the specified port!"}

def get_port_from_file(file_path=".env") -> int:
    """
    Reads the port number from a file.
    The file is expected to have a line like: PORT=5000
    If the file or PORT value is not found or invalid, default to 5000.
    """
    default_port = 5000
    try:
        with open(file_path, "r") as f:
            for line in f:
                line = line.strip()
                if line.startswith("PORT="):
                    port_str = line.split("=", 1)[1].strip()
                    return int(port_str)
    except Exception as e:
        print(f"Error reading port from '{file_path}': {e}")
    return default_port

if __name__ == "__main__":
    import uvicorn

    port = get_port_from_file()  
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=True)
