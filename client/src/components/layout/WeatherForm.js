import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

export default class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      city: "",

      showWeatherResult: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    window.location.reload();
  }
  onChange(e) {
    //set the values entered in the form to the state
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault(); // prevents the submit form

    console.log("get weather result now");
    axios.get("/api/category/weather" + "/" + this.state.city).then(result => {
      if (result) {
        console.log(result.data);

        this.setState({
          showWeatherResult: result.data
          //showWeatherForm: true
        });
        console.log(
          "this.state.showWeatherResult.length-" + this.state.showWeatherResult
        );
      }
    });
  }
  render() {
    return (
      <div className="landing landingStyle">
        <div className="landing-inner text-white">
          <div className="container">
            <div className="row">
              <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="col-6 ">
                  <input
                    type="text"
                    className="form-control mx-5 border-0  border-bottom border-dark transparentBackground"
                    id="city"
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-3 ">
                  <button
                    type="submit"
                    className="btn btn-default mx-5  responsive-width"
                  >
                    Get Weather
                  </button>
                </div>
                <div className="col-3 ">
                  <button
                    type="submit"
                    className="btn btn-default mx-5 responsive-width"
                    onClick={this.onClick}
                  >
                    Back to Home
                  </button>
                </div>
              </form>
            </div>
          </div>
          {this.state.showWeatherResult != null ? (
            <WeatherCard showWeatherResult={this.state.showWeatherResult} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}