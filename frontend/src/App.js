import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableList from "./components/TableList";
import ThreeCardPricePane from "./components/ThreeCardPricePane";
import ThreeCardGraphPane from "./components/ThreeCardGraphPane";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      today_data: [],
      selected_veg: {},
      lastTenDaysData: {},
    };
  }

  getTodayData = () => {
    const data = this.state.data;
    const today_data = [];
    for (const [veg_name, pricing] of Object.entries(data)) {
      for (const [key, value] of Object.entries(pricing)) {
        if (value.hasOwnProperty("today")) {
          let veg = {};
          veg.name = veg_name;
          veg.max_price = value.max_price;
          veg.avg_price = value.avg_price;
          veg.min_price = value.min_price;
          today_data.push(veg);
        }
      }
    }
    return today_data;
  };

  setSelectedVeg = (dataFromChild) => {
    const selected_veg_info = this.state.today_data.filter((vegetable) => {
      return vegetable.name === dataFromChild;
    });
    this.setState({
      selected_veg: selected_veg_info[0],
    });
    if (this.state.data.hasOwnProperty(dataFromChild)) {
      this.setState({ lastTenDaysData: this.state.data[dataFromChild] });
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/`).then((res) => {
      const fetched_data = res.data;
      this.setState({ data: fetched_data });
      this.setState({ today_data: this.getTodayData() });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <div className="m-5">
          <div className="container">
            {Object.keys(this.state.selected_veg).length === 0 &&
            this.state.selected_veg.constructor === Object ? null : (
              <div>
                <ThreeCardPricePane selection={this.state.selected_veg} />
                <br />
                <br />
                <ThreeCardGraphPane data={this.state.lastTenDaysData} />
              </div>
            )}
            <br />
            <br />
            <TableList
              today_data={this.state.today_data}
              selected_veg={this.setSelectedVeg}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
