import json
import time
from threading import Thread

from flask import Flask, jsonify

from scrape import scrape_vegetable_price

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret_key'

def background_task():
    """ Saving API details in every 3 hours """
    while True:
        context = scrape_vegetable_price(lang='EN', 
                                    date='', 
                                    pricetype='W',
                                    last_n_days=10)

        with open('price_data.json', 'w') as price_data:
            price_data.write(json.dumps(context))
        time.sleep(3*60*60)

Thread(target=background_task, daemon=True).start()

@app.route('/')
def api():
    """ API View for fruits and vegetables price """

    try:
        price_data = open('price_data.json', 'r').read()
    except FileNotFoundError:
        context = scrape_vegetable_price(lang='EN', 
                                        date='', 
                                        pricetype='W',
                                        last_n_days=10)
        price_data = open('price_data.json', 'w').write(json.dumps(context))


    return jsonify(json.loads(price_data))

if __name__ == "__main__":
    app.run()