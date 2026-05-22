from db import conn, curs
 
def load_default_data():
    curs.execute("SELECT COUNT(*) FROM explorer")
    count = curs.fetchone()[0]
 
    if count == 0:
        explorers = [
            ("Marco Polo", "Italy", "Explored Asia through Silk Road"),
            ("Christopher Columbus", "Italy", "Voyaged across Atlantic"),
            ("James Cook", "Britain", "Explored Pacific Ocean")
        ]
 
        curs.executemany(
            "INSERT INTO explorer VALUES (?, ?, ?)",
            explorers
        )
 
        conn.commit()
