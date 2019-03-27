import React, { Component } from "react";
import axios from "axios";

class Landing extends Component {
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }
  //component state
  constructor() {
    super();
    this.state = {
      questions: true,
      answers: false,
      loading: false,
      serverResponse: null
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    console.log("button clicked " + e.target.name);
    const weatherCheck = {
      city: "sydney",
      country: "Australia"
    };
    console.log("weatherCheck " + weatherCheck.city);
    this.setState({ loading: true });
    axios
      .get("/api/category/" + e.target.name + "/" + weatherCheck.city)
      .then(result => {
        if (result) {
          console.log(result.data);

          this.setState({
            questions: false,
            answers: true,
            loading: false,
            serverResponse: result.data
          });
        }
      });
  }
  render() {
    let dashboardContent;
    if (this.state.loading) {
      dashboardContent = <h4>Loading....</h4>;
      return (
        <div className="landing landingStyle">
          <div className="landing-inner text-white">
            <div className="container">
              <div className="row" />
              {dashboardContent}
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.questions) {
        return (
          <div className="landing landingStyle">
            <div className="landing-inner text-white">
              <div className="container">
                <div className="row">
                  {/* <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Developer Connector</h1>
                    <p className="lead">
                      {" "}
                      Create a developer profile/portfolio, share posts and get help
                      from other developers
                    </p>
                    <hr />
                    <h1>This is landing</h1>
                  </div> */}

                  <div className="col-sm-12">
                    <div className="card border-0">
                      <div className="card-body">
                        <h5 className="card-title">
                          Click one of the buttons below!
                        </h5>
                        {/* <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p> */}
                        <div className="bg-info clearfix" />
                        <div
                          className="btn-toolbar"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              onClick={this.onClick}
                              type="button"
                              name="weather"
                              className="btn btn-outline-light buttonBorder"
                            >
                              Weather
                            </button>
                          </div>
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              onClick={this.onClick}
                              type="button"
                              name="dogs"
                              className="btn btn-outline-light buttonBorder"
                            >
                              Dogs
                            </button>
                          </div>
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              onClick={this.onClick}
                              type="button"
                              name="cats"
                              className="btn btn-outline-light buttonBorder "
                            >
                              Cats
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix" />
                  {/* <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="landing landingStyle">
            <div className="landing-inner text-white">
              <div className="container">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-sm-2 nopadding"
                        // style={{ backgroundColor: "yellow" }}
                        // style="background-color:yellow;"
                      >
                        <img
                          // className="align-left m-5 pb-5"
                          src={
                            this.state.serverResponse.resData.current.condition
                              .icon
                          }
                          alt="Card image"
                        />
                        <text className="textPadding">
                          {
                            this.state.serverResponse.resData.current.condition
                              .text
                          }
                        </text>
                      </div>

                      <div
                        className="col-sm-6 nopadding"
                        // style={{ backgroundColor: "pink" }}
                      >
                        <div className="col-sm-4 col-md-4 nopadding">
                          <text>
                            Wind:{" "}
                            {this.state.serverResponse.resData.current.wind_kph}
                            kmph
                          </text>
                        </div>
                        <div className="col-sm-4 col-md-4 nopadding">
                          <text>
                            Humidity:{" "}
                            {this.state.serverResponse.resData.current.humidity}
                          </text>
                        </div>
                        <div className="col-sm-4 col-md-4 nopadding">
                          <text>
                            Feels like:{" "}
                            {
                              this.state.serverResponse.resData.current
                                .feelslike_c
                            }
                          </text>
                          <span> &#8451;</span>
                        </div>
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

export default Landing;
