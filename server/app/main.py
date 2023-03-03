from fastapi import FastAPI
from pydantic import BaseModel
from typing import Final
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Class for post request


class Login(BaseModel):
    username: str
    password: str


my_client = MongoClient(os.getenv("MONGO_URI"))

# On Startup and close connect and discnnect the mongodb client

@app.on_event("startup")
def startup_db_client():
    my_client = MongoClient(os.getenv("MONGO_URI"))
    my_db = my_client['hello']
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    MongoClient(os.getenv("MONGO_URI"))

@app.post("/loginAuth")
def auth(data: Login):
    try:
        my_client_username  = my_client.finance_tracker.users.find_one(
            {'username': data.username})
        if my_client_username['password'] != data.password:
            return { "message" : "wrong password" }
        else:
            return { "message" : "do Login" }   
    except:
        return { "message" : "No users found" }


@app.post("/register")
def register_new_user(data : Login):
    print(data)
    my_client.finance_tracker.users.insert_one(data)
    return { "message" : f'username {data.username} password {data.password}' }
