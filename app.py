
from flask import Flask, jsonify

from scrape import scrape_vegetable_price

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret_key'

@app.route('price_api/')
def api():
    
    context = scrape_vegetable_price(lang='NE', 
                                    date='06/10/2020', 
                                    pricetype='W')
    return jsonify(context)

if __name__ == "__main__":
    app.run()