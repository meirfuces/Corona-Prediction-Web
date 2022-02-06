import json

import pandas as pd
from flask import jsonify


def get_main_data():
    data = pd.read_csv("owid-covid-latest2.csv")
    print("hey data")
    df = pd.DataFrame(data)
    df = df[['last_updated_date','location','total_cases_per_million','new_cases']]

    # convert to json
    result = df.to_json(orient="table")

    parsed = json.loads(result)
    return jsonify(parsed)



