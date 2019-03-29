import React, { Component } from "react";

import $ from "jquery";
class NewsCard extends Component {
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
    console.log(this.props.showNewsResult);
    console.log("result is **** " + this.props.showNewsResult.section);
    if (this.props.showNewsResult.section.length > 0) {
      console.log("number of sections " + this.props.showNewsResult.title);
      console.log("showing news" + this.props.showNewsResult.title);
      return (
        <div
          className="newCardResult "
          name={this.props.showNewsResult.title}
          key={this.props.showNewsResult.title}
        >
          <div className="newsCardResult-inner ">
            <div className="container">
              <div className="row">
                <div className=" mx-5 text-dark">
                  <div
                    className="col-sm-12 nopadding"
                    // style={{ backgroundColor: "yellow" }}
                    // style="background-color:yellow;"
                  >
                    <div className="col-sm-3">
                      {/* <img
                        // className="align-left m-5 pb-5"
                        src={
                          this.props.showNewsResult.resData.status.section
                            
                        }
                        alt="Card image"
                      /> */}
                    </div>
                    <div className="col-sm-3">
                      testing {this.props.showNewsResult.title}
                    </div>

                    <p className="textPadding" />
                  </div>

                  {/* <div
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NewsCard;
