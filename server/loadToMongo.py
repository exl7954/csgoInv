import pymongo
from pymongo import MongoClient
import datetime
import json
from dotenv import load_dotenv
import os
from os.path import join, dirname

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
uri = os.environ.get("ATLAS_URI")

client = MongoClient(uri)
db = client.csgo
collection = db.items

toAdd = []

with open('items.json', 'r') as f:
    items = json.load(f)

for item in items['data']:
    item["_id"] = item["nameID"]
    toAdd.append(item)

collection.insert_many(toAdd)
