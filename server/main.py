from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
import requests
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

session = requests.Session()
with open('data.json') as f:
    data1 = json.load(f)


from flask import jsonify,make_response
@app.route('/',methods =['GET'])

def getTickets():
    print('getStart')
    page = request.args.get('page')
    print(page)
    output_dict = [x for x in data1 if "wix " in x['title'] ]
    output_json = json.dumps(output_dict)
    return jsonify(data1)

@app.route('/',methods =['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def postTitle():
    print('post')
    return jsonify({
        "name": "meir"
    })


@app.route('/search', methods =['put'])
@cross_origin(allow_headers=['Content-Type'])
def search():
    page = session.get(data1, params={'title': 'wix'}).json()

    return jsonify(data1)



