import React, { Component } from "react";

import $ from "jquery";
class WeatherCard extends Component {
  constructor() {
    super();
    // console.log("state in weater card " + this.props.getWeather);
    this.onConfirm = this.onConfirm.bind(this);
  }
  onConfirm(e) {
    //set the values entered in the form to the state
    //this.setState(hide);
    // console.log("close ");
  }
  componentDidMount() {
    $(".alert")
      .delay(4000)
      .slideUp(200, function() {
        //$(this).alert("close");
      });
    //alert("what is this");
  }
  render() {
    // console.log("showing weathercard");
    if (this.props.showWeatherResult.resData === null) {
      return (
        <div className="weatherCardResult">
          <div className="weatherCardResult-inner ">
            <div className="container">
              <div className="row" />
              Loadding..
            </div>
          </div>
        </div>
      );
    } else {
      if (this.props.showWeatherResult.resData.error != null) {
        return (
          <div className="weatherCardResult">
            <div className="weatherCardResult-inner ">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className=" mx-5 text-dark">
                    <div className="alert alert-success alert-dismissible">
                      <strong>
                        {this.props.showWeatherResult.resData.error.message}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return (
          <div className="weatherCardResult">
            <div className="weatherCardResult-inner ">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="weatherCard">
                    <span className="city">
                      {this.props.showWeatherResult.resData.location.name},{" "}
                      {this.props.showWeatherResult.resData.location.country}{" "}
                    </span>
                    {/* <ul className="menu">
                      <li />
                      <li />
                      <li />
                    </ul> */}
                    <br />
                    <div className="sun">
                      <img
                        // className="align-left m-5 pb-5"
                        src={
                          this.props.showWeatherResult.resData.current.condition
                            .icon
                        }
                      />
                    </div>
                    <span className="temp">
                      {Math.round(
                        this.props.showWeatherResult.resData.current.temp_c
                      )}
                      &#176;
                    </span>
                    <span>
                      <ul className="variations">
                        <li>
                          {
                            this.props.showWeatherResult.resData.current
                              .condition.text
                          }
                        </li>
                        <li>
                          <span className="speed">
                            {Math.round(
                              this.props.showWeatherResult.resData.current
                                .wind_kph
                            )}
                            <span className="mph">kph</span>
                          </span>
                        </li>
                      </ul>
                    </span>
                    <div className="forecast clear">
                      <div className="day tue">
                        {
                          days[
                            new Date(
                              this.props.showWeatherResult.resData.forecast.forecastday[1].date
                            ).getDay()
                          ]
                        }
                        <br />
                        <span>
                          <img
                            // className="align-left m-5 pb-5"
                            src={
                              this.props.showWeatherResult.resData.forecast
                                .forecastday[1].day.condition.icon
                            }
                          />
                        </span>
                        <br />{" "}
                        <span className="highTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[1].day.maxtemp_c
                          )}
                          &#176;
                        </span>{" "}
                        <br />{" "}
                        <span className="lowTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[1].day.mintemp_c
                          )}
                          &#176;
                        </span>
                      </div>
                      <div className="day wed">
                        {
                          days[
                            new Date(
                              this.props.showWeatherResult.resData.forecast.forecastday[2].date
                            ).getDay()
                          ]
                        }
                        <br />
                        <span>
                          <img
                            // className="align-left m-5 pb-5"
                            src={
                              this.props.showWeatherResult.resData.forecast
                                .forecastday[2].day.condition.icon
                            }
                          />
                        </span>
                        <br />{" "}
                        <span className="highTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[2].day.maxtemp_c
                          )}
                          &#176;
                        </span>{" "}
                        <br />{" "}
                        <span className="lowTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[2].day.mintemp_c
                          )}
                          &#176;
                        </span>
                      </div>
                      <div className="day thu">
                        {
                          days[
                            new Date(
                              this.props.showWeatherResult.resData.forecast.forecastday[3].date
                            ).getDay()
                          ]
                        }
                        <br />
                        <span>
                          <img
                            // className="align-left m-5 pb-5"
                            src={
                              this.props.showWeatherResult.resData.forecast
                                .forecastday[3].day.condition.icon
                            }
                          />
                        </span>
                        <br />{" "}
                        <span className="highTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[3].day.maxtemp_c
                          )}
                          &#176;
                        </span>{" "}
                        <br />{" "}
                        <span className="lowTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[3].day.mintemp_c
                          )}
                          &#176;
                        </span>
                      </div>
                      <div className="day fri">
                        {
                          days[
                            new Date(
                              this.props.showWeatherResult.resData.forecast.forecastday[4].date
                            ).getDay()
                          ]
                        }
                        <br />
                        <span>
                          <img
                            // className="align-left m-5 pb-5"
                            src={
                              this.props.showWeatherResult.resData.forecast
                                .forecastday[4].day.condition.icon
                            }
                          />
                        </span>
                        <br />{" "}
                        <span className="highTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[4].day.maxtemp_c
                          )}
                          &#176;
                        </span>{" "}
                        <br />{" "}
                        <span className="lowTemp">
                          {Math.round(
                            this.props.showWeatherResult.resData.forecast
                              .forecastday[4].day.mintemp_c
                          )}
                          &#176;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default WeatherCard;
