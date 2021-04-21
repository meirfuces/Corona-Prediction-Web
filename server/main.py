from flask import Flask, request
import filter

from flask_cors import CORS, cross_origin
import json
import requests
app = Flask(__name__)
import pandas as pd
import json
# def CreateData():
#     data = pd.read_csv("owid-covid-data.csv")
#     df = pd.DataFrame(data)
#     df.drop(df.iloc[:, 6:], inplace=True, axis=1)
#     df = df[df['location'].isin(["Afghanistan", "Israel"])]
#     # df[df['location'].isin(["Afghanistan"])]   filter
#
#     # display
#     result = df.to_json(orient="table")
#     parsed = json.loads(result)

    # print(json.dumps(parsed, indent=4))
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
jsonFilenName = 'owid-covid-data.json'
session = requests.Session()


dataCsv = pd.read_csv("owid-covid-data.csv")
df = pd.DataFrame(dataCsv)
df.drop(df.iloc[:, 6:], inplace = True, axis = 1)

with open(jsonFilenName) as f:
    jsonData = json.load(f)
    
with open('data.json') as f:
    data1 = json.load(f)


from flask import jsonify,make_response
@app.route('/',methods =['GET','POSY-'])

def getTickets():
    print('getStart')
    page = request.args.get('page')
    # print(page)
    data = pd.read_csv("owid-covid-data.csv")
    df = pd.DataFrame(data)
    # df.drop(df.iloc[:, 6:], inplace=True, axis=1)
    # df = df[df['location'].isin(["Afghanistan", "Israel"])]
    # df[df['location'].isin(["Afghanistan"])]   filter

    # display
    result = df.to_json(orient="table")
    parsed = json.loads(result)
    return jsonify(parsed)
# return JSONP_data
    # return jsonify(data1)

@app.route('/',methods =['POST'])
@cross_origin(allow_headers=['Content-Type'])

def postTitle():
    print('meir ost')
    return jsonify({
        "name": "meir"
    })


@app.route('/search', methods =['put'])
@cross_origin(allow_headers=['Content-Type'])
def search():
    page = session.get(data1, params={'title': 'wix'}).json()
    output_dict = [x for x in data1 if "wix " in x['title']]
    output_json = json.dumps(output_dict)
    return jsonify("hello")
