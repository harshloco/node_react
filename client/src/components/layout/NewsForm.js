import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

class NewsForm extends Component {
  constructor() {
    super();
    this.state = {
      topicList:
        "arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world",
      showNewsResult: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    console.log("button clicked " + e.target.name);
    if (e.target.name === "home") {
    } else {
      //console.log("get weather result now");
      let topicName = e.target.name.trim();
      axios.get("/api/category/news" + "/" + topicName.trim()).then(result => {
        if (result) {
          console.log(result.data);

          this.setState({
            showNewsResult: result.data
            //showWeatherForm: true
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
    console.log(
      "this.state.topicList.length " + this.state.topicList.split(",").length
    );
    if (topicNames.length > 0) {
      for (i; i < topicNames.length; i++) {
        htmlButtons.push(
          React.createElement(
            "button",
            {
              onClick: this.onClick,
              name: topicNames[i],
              key: topicNames[i],
              className: className
            },
            topicNames[i]
          )
        );
      }
    }
    var numberOfNews = [];
    if (this.state.showNewsResult != null) {
      // numberOfNews = this.state.showNewsResult.resData.results;
      // numberOfNews = this.state.showNewsResult.resData.results.splice(
      //   5,
      //   this.state.showNewsResult.resData.num_results
      // );
      var k = 0;
      for (k; k < 5; k++) {
        console.log(
          "title " + this.state.showNewsResult.resData.results[k].title
        );
        numberOfNews.push(this.state.showNewsResult.resData.results[k]);
      }
      console.log(numberOfNews.length);
      console.info("array obejct " + numberOfNews);
    }

    return (
      <div className="landing landingStyle">
        <div className="landing-inner text-white">
          <div className="container">
            <div className="row">
              <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="col-6 ">
                  {/* <input
                    type="text"
                    className="form-control mx-5 border-0  border-bottom border-dark transparentBackground"
                    id="city"
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  /> */}
                  <div className="mx-5 dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Select a News Topic
                    </button>
                    <div
                      className="dropdown-menu dropdownHeight"
                      aria-labelledby="dropdownMenu2"
                    >
                      {htmlButtons}
                    </div>
                  </div>
                </div>

                <div className="col-6 ">
                  <button
                    type="submit"
                    className="btn btn-default mx-5 responsive-width"
                    name="home"
                    onClick={this.onClick}
                  >
                    Back to Home
                  </button>
                </div>
              </form>
            </div>
          </div>

          {this.state.showNewsResult != null
            ? numberOfNews.map((
                _item,
                _index // Note: single line expression, so impilicit;y return our ItemComponent
              ) => <NewsCard showNewsResult={numberOfNews[_index]} />)
            : // <NewsCard showNewsResult={this.state.showNewsResult}
              //  />
              ""}
        </div>
      </div>
    );
  }
}

export default NewsForm;
