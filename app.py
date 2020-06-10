
from flask import Flask, jsonify

from scrape import scrape_vegetable_price

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret_key'

@app.route('/')
def api():
    
    context = scrape_vegetable_price(lang='EN', 
                                    date='', 
                                    pricetype='W')
    return jsonify(context)

if __name__ == "__main__":
    app.run()