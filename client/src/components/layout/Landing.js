import React, { Component } from "react";
import NewsForm from "./NewsForm";
import WeatherForm from "./WeatherForm";

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
      serverResponse: null,
      showWeatherForm: false,
      showNewsForm: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    let buttonName = e.target.name;
    console.log("button clicked " + e.target.name);
    // const weatherCheck = {
    //   city: "sydney",
    //   country: "Australia"
    // };
    // console.log("weatherCheck " + weatherCheck.city);
    if (e.target.name === "weather") {
      this.setState({ loading: true });
      this.setState({
        questions: false,
        answers: true,
        loading: false,
        serverResponse: "result.data",
        showWeatherForm: true,
        showNewsForm: false
      });
    } else if (e.target.name === "news") {
      console.log("news button clicked");
      this.setState({ loading: true });
      this.setState({
        questions: false,
        answers: true,
        loading: false,
        serverResponse: null,
        showWeatherForm: false,
        showNewsForm: true
      });
    }
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
                <div className="row d-flex justify-content-center">
                  {/* <div className="col-sm-12"> */}
                  <div className="card">
                    <div className="card-body ">
                      <h5 className="card-title text-dark text-center">
                        Click one of the buttons below!
                      </h5>
                      {/* <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p> */}
                      <div className="bg-info clearfix" />
                      <div className="d-flex justify-content-center">
                        <div
                          className="btn-toolbar mx-auto"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group m-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              onClick={this.onClick}
                              type="button"
                              name="weather"
                              className="btn btn-outline-info buttonBorder text-dark"
                            >
                              Weather
                            </button>
                          </div>
                          <div
                            className="btn-group m-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              onClick={this.onClick}
                              type="button"
                              name="news"
                              className="btn btn-outline-info buttonBorder text-dark"
                            >
                              News
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        if (this.state.showWeatherForm) {
          //show weather for where user can enter city details
          return <WeatherForm />;
        } else if (this.state.showNewsForm) {
          //show news form for where user can select topic
          return <NewsForm />;
        }
      }
    }
  }
}

export default Landing;
