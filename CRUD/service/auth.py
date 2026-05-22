import secrets
 
users = {
    "admin": "password",
    "satyam": "nepal",
    "explorer": "1234"
}
 
tokens = {}
 
 
def login(username: str, password: str):
 
    if username not in users:
        return None
 
    if users[username] != password:
        return None
 
    token = secrets.token_hex(16)
 
    tokens[token] = username
 
    return token
 
 
def get_user(token: str):
    return tokens.get(token)