 
from db import conn, curs
from models.explorer import Explorer
 
 
def row_to_model(row):
    return Explorer(
        name=row[0],
        country=row[1],
        description=row[2]
    )
 
 
def get_all():
    curs.execute("SELECT * FROM explorer")
    rows = curs.fetchall()
    return [row_to_model(r) for r in rows]
 
 
def get_one(name: str):
    curs.execute("SELECT * FROM explorer WHERE name=?", (name,))
    row = curs.fetchone()
 
    if row:
        return row_to_model(row)
 
    return None
 
 
def create(explorer: Explorer):
    curs.execute(
        "INSERT INTO explorer VALUES (?, ?, ?)",
        (explorer.name, explorer.country, explorer.description)
    )
 
    conn.commit()
 
    return explorer
 
 
def update(name: str, explorer: Explorer):
    curs.execute(
        "UPDATE explorer SET country=?, description=? WHERE name=?",
        (explorer.country, explorer.description, name)
    )
 
    conn.commit()
 
    return get_one(name)
 
def delete(name: str):
    res = curs.execute(
        "DELETE FROM explorer WHERE name=?",
        (name,)
    )
 
    conn.commit()
 
    return res.rowcount > 0