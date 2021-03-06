import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import Spinner from "../Spinner";

export default class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      city: "",

      showWeatherResult: null,
      showSpinner: false
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
    this.setState({
      showSpinner: true
    });
    // console.log("get weather result now");
    axios.get("/api/category/weather" + "/" + this.state.city).then(result => {
      if (result) {
        // console.log(result.data);

        this.setState({
          showWeatherResult: result.data,
          showSpinner: false
          //showWeatherForm: true
        });
      }
    });
  }
  render() {
    let getWeatherButton;
    if (this.state.city.length > 0) {
      getWeatherButton = (
        // <div className="col-3 ">

        <button
          type="submit"
          className="btn btn-outline-info buttonBorder text-dark mx-5 responsive-width whiteBackground"
        >
          Get Weather
        </button>
        // </div>
      );
    }
    return (
      <div className="landing landingStyle">
        <div className="landing-inner text-white">
          <div className="container">
            <div className="row d-flex justify-content-center">
              {this.state.showSpinner === true ? (
                <div className="landing landingStyle ">
                  <div className="landing-inner text-white">
                    <div className="container ">
                      <div className="d-flex justify-content-center row align-items-center">
                        <div className="col text-center">
                          <Spinner />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="form-inline" onSubmit={this.onSubmit}>
                  {/* <div className="col-6 "> */}
                  <input
                    type="text"
                    className="form-control mx-5 border-0  border-bottom border-dark "
                    id="city"
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                  {/* </div> */}

                  {getWeatherButton}
                  {/* <div className="col-3 "> */}

                  <button
                    type="submit"
                    className="btn btn-outline-info buttonBorder text-dark mx-5 responsive-width whiteBackground"
                    onClick={this.onClick}
                  >
                    Back to Home
                  </button>
                  {/* </div> */}
                </form>
              )}
            </div>
            {this.state.showWeatherResult != null &&
            this.state.showSpinner === false ? (
              <WeatherCard showWeatherResult={this.state.showWeatherResult} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
