import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import Spinner from "../Spinner";

class NewsForm extends Component {
  constructor() {
    super();
    this.state = {
      topicList:
        "Arts, Automobiles, Books, Business, Fashion, Food, Health, Home, Insider, Magazine, National, Nyregion, Obituaries, Opinion, Politics, Realestate, Science, Sports, Sundayreview, Technology,Theater, Travel, Upshot, World",
      showNewsResult: null,
      selectedTopic: "Select a News Topic",
      showSpinner: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    //console.log("button clicked " + e.target.name);
    if (e.target.name === "home") {
      window.location.reload();
    } else {
      //console.log("get weather result now");
      this.setState({
        showSpinner: true
      });
      let topicName = e.target.name.trim().toLowerCase();
      this.setState({
        selectedTopic: topicName.toUpperCase() + " "
      });
      axios.get("/api/category/news" + "/" + topicName.trim()).then(result => {
        if (result) {
          // console.log(result.data);

          this.setState({
            showNewsResult: result.data,
            showSpinner: false
          });
        }
      });
    }
    // window.location.reload();
  }
  onChange(e) {
    //set the values entered in the form to the state
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault(); // prevents the submit form
  }
  render() {
    var htmlButtons = [];
    var className = "dropdown-item";
    var topicNames = this.state.topicList.split(",");
    var i = 0;

    if (topicNames.length > 0) {
      for (i; i < topicNames.length; i++) {
        htmlButtons.push(
          React.createElement(
            "button",
            {
              onClick: this.onClick,
              name: topicNames[i].toUpperCase(),
              key: topicNames[i],
              className: className
            },
            topicNames[i].toUpperCase()
          )
        );
      }
    }

    var numberOfNews = [];
    if (this.state.showNewsResult != null) {
      var k = 0;
      for (k; k < this.state.showNewsResult.resData.num_results; k++) {
        numberOfNews.push(this.state.showNewsResult.resData.results[k]);
      }
    }
    if (this.state.showSpinner === true) {
      return (
        <div className="landing landingStyle ">
          <div className="landing-inner text-white">
            <div className="container ">
              <div className="h-100 row align-items-center">
                <div className="col text-center">
                  <Spinner />
                </div>
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
              <div className="row d-flex justify-content-center">
                <form className="form-inline" onSubmit={this.onSubmit}>
                  <div className="mx-5 dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.selectedTopic}
                    </button>
                    <div
                      className="dropdown-menu dropdownHeight"
                      aria-labelledby="dropdownMenu2"
                    >
                      {htmlButtons}
                    </div>
                  </div>
                  {/* </div> */}

                  {/* <div className="col-6 "> */}
                  <button
                    type="submit"
                    className="btn btn-outline-info buttonBorder text-dark mx-5 responsive-width whiteBackground"
                    name="home"
                    onClick={this.onClick}
                  >
                    Back to Home
                  </button>
                  {/* </div> */}
                </form>
              </div>
            </div>

            {this.state.showNewsResult != null ? (
              <NewsCard showNewsResult={this.state.showNewsResult} />
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  }
}

export default NewsForm;
