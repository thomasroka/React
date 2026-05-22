import sqlite3
conn=sqlite3.connect("explorers.db",check_same_thread=False)
curs=conn.cursor()
curs.execute("""
CREATE TABLE IF NOT EXISTS explorer(
             name TEXT PRIMARY KEY,
             country TEXT,
             description TEXT)""")
conn.commit()