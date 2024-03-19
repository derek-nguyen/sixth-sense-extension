import os
from dotenv import load_dotenv
from fastapi import FastAPI
import sys

load_dotenv()
PYTHONPATH = os.getenv("PYTHONPATH")
sys.path.insert(0,PYTHONPATH)

from app.routers import summarization_router

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(summarization_router.router, prefix="/api/summarize")

