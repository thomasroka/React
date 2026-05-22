from fastapi import FastAPI
from web.explorer import router as explorer_router
from web.auth import router as auth_router
from db.init_data import load_default_data
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()
load_default_data()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
     allow_headers=["*"],
)
app.include_router(auth_router)
app.include_router(explorer_router)

if __name__=="__main__":
    import uvicorn
    uvicorn.run(
    "main:app",
    port=8000,
    reload=True
    )
