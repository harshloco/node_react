import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
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
    console.log("close ");
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
    console.log("showing weathercard");
    if (this.props.showWeatherResult.resData.error != null) {
      return (
        <div className="alert alert-success alert-dismissible">
          <strong>Warning!</strong> This alert box could indicate a warning that
          might need attention.
        </div>
        //   <SweetAlert title="Here's a message!" onConfirm={this.onConfirm}>
        //     {this.props.showWeatherResult.resData.error.message}
        //   </SweetAlert>
      );
      return <div />;
    } else {
      return (
        <div className="weatherCardResult">
          <div className="weatherCardResult-inner ">
            <div className="container">
              <div className="row">
                <div className=" mx-5 text-dark">
                  <div
                    className="col-sm-12 nopadding"
                    // style={{ backgroundColor: "yellow" }}
                    // style="background-color:yellow;"
                  >
                    <div className="col-sm-3">
                      <img
                        // className="align-left m-5 pb-5"
                        src={
                          this.props.showWeatherResult.resData.current.condition
                            .icon
                        }
                        alt="Card image"
                      />
                    </div>
                    <div className="col-sm-3">
                      {
                        this.props.showWeatherResult.resData.current.condition
                          .text
                      }
                    </div>

                    <p className="textPadding" />
                  </div>

                  <div
                    className="col-sm-12 nopadding"
                    // style={{ backgroundColor: "pink" }}
                  >
                    <div className="col-sm-12 col-md-12 nopadding">
                      <p>
                        Wind:{" "}
                        {this.props.showWeatherResult.resData.current.wind_kph}
                        kmph
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-12 nopadding">
                      <p>
                        Humidity:{" "}
                        {this.props.showWeatherResult.resData.current.humidity}
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-12 nopadding">
                      <p>
                        Feels like:{" "}
                        {
                          this.props.showWeatherResult.resData.current
                            .feelslike_c
                        }
                        <span> &#8451;</span>
                      </p>
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

export default WeatherCard;
