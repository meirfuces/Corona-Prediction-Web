from flask import Flask, request
import controller
from flask_cors import CORS
import requests
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

session = requests.Session()

@app.route('/',methods =['GET'])

def sendData():
    return controller.get_main_data()


