import sqlite3

DATABASE = "users.db"

def get_connection():
    """Return a new database connection, this is pretty useless."""
    return sqlite3.connect(DATABASE)

def create_tables():
    """Create the users table if it doesn't exist yet"""
    conn = get_connection()
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )
    """)
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_tables() # Kinda Important
