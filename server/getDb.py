import json

from apscheduler.schedulers.blocking import BlockingScheduler
import pandas as pd

from flask_pymongo import PyMongo, MongoClient


try:
    cluster = MongoClient(
        'mongodb+srv://meirfuces:meirfuces@cluster0.v4k4l.mongodb.net/corona_data?retryWrites=true&w=majority')
    db = cluster["corona_data"]
    collections = db["corona_data"]
    mydict = {"name": "John", "address": "Highway 37"}



    # x = collections.insert_one(mydict)

    print('connect')

except Exception as e:
    print(e)



def download_data():
    print("Covid-19 data refresh")
    url_raw = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json'
    df_raw = pd.read_json(url_raw)

    df_raw.to_csv('owid-covid-latest2.csv', index=False)
    # to_save =df_raw.to_json(orient="table")

    mydict = {"name": "John", "address": "Highway 37"}
    result = df_raw.to_json(orient="table")
    parsed = json.loads(result)

    x = collections.insert_one(parsed)
    # collections.insert_one(df_raw.to_json(orient="table"))

def everyDay():
    scheduler = BlockingScheduler()
    scheduler.add_job(download_data, 'interval', seconds=5)

    scheduler.start()
