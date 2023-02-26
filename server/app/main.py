from fastapi import FastAPI
from pydantic import BaseModel
from typing import Final
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "https://8000-bonysureliy-financetrac-ss9si5h6th6.ws-us88.gitpod.io/",
    "https://5173-bonysureliy-financetrac-ss9si5h6th6.ws-us88.gitpod.io/",
    "https://bonysureliy-financetrac-ss9si5h6th6.ws-us88.gitpod.io/",
    "http://localhost:5173/"
    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Class for post request 
class Login(BaseModel):
    username : str
    password : str
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


@app.get("/")
def root():
    return { "message" : "FastAPI is Awesome" }

@app.post("/loginAuth")
def auth(data : Login):
    # * Todo
    #   1.Read the data of post 
    #   2.create the if condition to check
    
    DB_USERNAME : Final = "bony.sureliya"
    DB_PASSWORD : Final = "somepass"
    
    if data.username == DB_USERNAME and data.password == DB_PASSWORD:
        return { "message" : "Hooray!!!" }
    else :
        return { "message" : f'Oops!!' }

@app.post("/register")
def new_user_register(data : Login):
    mydict = { "username": data.username, "password": data.password }
    my_client.hello.first.insert_one(mydict)
    return {"message" :  "User Registered"}