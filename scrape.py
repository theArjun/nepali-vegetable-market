from pprint import pprint as pp

import requests
from bs4 import BeautifulSoup


def scrape_vegetable_price(lang="NE", date="06/04/2020", pricetype="W"):
    """ Scrape vegetable price from Kalimati market """

    url = "http://kalimatimarket.gov.np/priceinfo/dlypricebulletin"
    form_data = {"cdate": date, "pricetype": pricetype}
    session = requests.Session()
    lang_change_url = f"http://kalimatimarket.gov.np/home/language/{lang}"
    session.get(lang_change_url)
    response = session.post(url, data=form_data).text
    soup = BeautifulSoup(response, "lxml")
    table = soup.find("table").find("tr").find("td").find("table")

    data = {}

    meta_data = {}

    meta_data["date"] = date
    meta_data["language"] = lang
    if pricetype == "W":
        meta_data["price_type"] = "Wholesale"
    elif pricetype == "R":
        meta_data["price_type"] = "Retail"
    else:
        meta_data["price_type"] = "Invalid"

    data["meta_data"] = meta_data

    rows = table.findAll("tr")
    for row in rows[3:]:
        cells = row.findAll("td")
        vegetable_name = cells[0].get_text()
        data[vegetable_name] = {}
        data[vegetable_name]["unit"] = cells[1].get_text()
        data[vegetable_name]["min_price"] = cells[2].get_text()
        data[vegetable_name]["max_price"] = cells[3].get_text()
        data[vegetable_name]["avg_price"] = cells[4].get_text()

    return data

scrape_vegetable_price()
