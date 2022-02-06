from apscheduler.schedulers.blocking import BlockingScheduler
import pandas as pd
from pymongo import MongoClient
url_raw = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv'

def download_data():
    print("Covid-19 data refresh")

    df_raw = pd.read_csv(url_raw)
    df_raw.to_csv('owid-covid-latest2.csv', index=False)

def everyDay():
    scheduler = BlockingScheduler()
    scheduler.add_job(download_data, 'interval', hours=24)

    scheduler.start()