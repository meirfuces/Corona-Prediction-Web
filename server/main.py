from flask import Flask, request

from apscheduler.schedulers.blocking import BlockingScheduler
from flask_cors import CORS, cross_origin
import json
import requests
app = Flask(__name__)
import pandas as pd
import json
from flask import jsonify,make_response
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# jsonFilenName = 'owid-covid-data.json'
session = requests.Session()


url_raw = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv'


def download_data():
    print("Covid-19 data refresh")

    df_raw = pd.read_csv(url_raw)
    df_raw.to_csv('owid-covid-latest2.csv', index=False)
# Defining main function
def main():
    print(" hey there")
    scheduler = BlockingScheduler()
    scheduler.add_job(download_data, 'interval', hours=24)
    # scheduler.add_job(download_data, 'interval', seconds=5)

    scheduler.start()

# Using the special variable
# __name__
if __name__ == "__main__":
    main()

    # main function
@app.route('/',methods =['GET','POSY-'])

def sendData():
    data = pd.read_csv("owid-covid-latest2.csv")
    print("hey data")
    df = pd.DataFrame(data)

    df.sort_values(by="new_cases", ascending=False)

    # display
    result = df.to_json(orient="table")

    parsed = json.loads(result)
    return jsonify(parsed)

