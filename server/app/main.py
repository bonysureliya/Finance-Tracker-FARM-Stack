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


@app.get("/")
def root():
    return {"message": "New Message for test"}


@app.post("/loginAuth")
def auth(data: Login):
    # * Todo
    #   1.Read the data of post
    #   2.create the if condition to check

    my_client_username = my_client.finance_tracker.users.find_one(
        {'username': data.username}, {'_id': 1, 'username': 1, 'password': 1})
    print(my_client_username['username'])

    #    my_client_username = my_client.finance_tracker.users.find_one(
    #     {'username': data.username}, {'_id': 1, 'username': 1, 'password': 1})
    try:
        my_client_username = my_client.finance_tracker.users.find_one(
            {'username': 'asdasdasd'})
        print(my_client_username)
        # if my_client_username == "None":
        #     return {"message" : "No users"}
        # else:
        #     return {"message" : "HOORAY"}
    except:
        print("No user found")
    # print(my_client_username)


@app.post("/register")
def new_user_register(data: Login):
    my_client.finance_tracker.users.insert_one(mydict)
    return {"message":  "User Registered"}
