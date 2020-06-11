from datetime import datetime, timedelta


import requests
from bs4 import BeautifulSoup


def scrape_vegetable_price(lang="NE", date="06/04/2020", pricetype="W", last_n_days=10):
    """ Scrape vegetable price from Kalimati market """

    data = {}

    url = "http://kalimatimarket.gov.np/priceinfo/dlypricebulletin"
    lang_change_url = f"http://kalimatimarket.gov.np/home/language/{lang}"
    session = requests.Session()
    session.get(lang_change_url)

    for i in range(last_n_days, -1, -1):

        timestamp = datetime.now() - timedelta(days=i)
        day = timestamp.day
        month = timestamp.month
        year = timestamp.year

        date = f'{month}/{day}/{year}'

        form_data = {"cdate": date, "pricetype": pricetype}
        response = session.post(url, data=form_data).text
        soup = BeautifulSoup(response, "lxml")
        table = soup.find("table").find("tr").find("td").find("table")

        meta_data = {}
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

            if vegetable_name in data:
                pass
            else:
                data[vegetable_name] = {}
            one_day_data = {}
            
            one_day_data["min_price"] = cells[2].get_text()
            one_day_data["max_price"] = cells[3].get_text()
            one_day_data["avg_price"] = cells[4].get_text()
            one_day_data["days_before"] = i
            if i == 0:
                one_day_data["today"] = True

            data[vegetable_name][date] = one_day_data
            data[vegetable_name]['unit'] = cells[1].get_text()

    return data


scrape_vegetable_price()
