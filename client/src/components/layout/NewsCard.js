import React, { Component } from "react";
import classnames from "classnames";

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
    // console.log("close ");
  }
  componentDidMount() {}
  render() {
    //console.log(this.props.showNewsResult.resData.status);
    var numberOfNews = [];
    if (this.props.showNewsResult.resData != null) {
      // numberOfNews = this.state.showNewsResult.resData.results;
      // numberOfNews = this.state.showNewsResult.resData.results.splice(
      //   5,
      //   this.state.showNewsResult.resData.num_results
      // );
      var k = 0;
      var activeClass = "";
      var carouselCardClass = [];
      for (k; k < this.props.showNewsResult.resData.results.length; k++) {
        // console.log(
        //   "title " + this.props.showNewsResult.resData.results[k].title
        // );

        if (k === 3) {
          activeClass = "active";
          carouselCardClass.push("carousel-item col-md-4 active");
        } else {
          carouselCardClass.push("carousel-item col-md-4 ");
        }
        // console.log(
        //   "this.props.showNewsResult.resData.results[" +
        //     k +
        //     "].length " +
        //     this.props.showNewsResult.resData.results[k].multimedia.length
        // );
        numberOfNews.push(this.props.showNewsResult.resData.results[k]);
        // console.log("numberOfNews[_index] " + numberOfNews.length);
      }
      // console.log(numberOfNews.length);
      // console.info("array obejct " + numberOfNews);
      // console.log("number of news " + numberOfNews[3].title);
    }
    // console.log("result is **** " + this.props.showNewsResult.section);
    if (this.props.showNewsResult.resData.status.length > 0) {
      // console.log("number of sections " + this.props.showNewsResult.title);
      //console.log("showing news" + this.props.showNewsResult.title);
      return (
        <div
          className="newCardResult "
          name={this.props.showNewsResult.resData.status}
          key={this.props.showNewsResult.resData.status}
        >
          <div className="newsCardResult-inner ">
            <div className="container  d-flex justify-content-center mx-5">
              <div className="row">
                <div className="container-fluid">
                  {/* <h1 className="text-center mb-3">
                    Bootstrap Multi-Card Carousel
                  </h1> */}
                  <div className="clearfix" />

                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                  <div
                    id="myCarousel"
                    className="carousel slide "
                    data-ride="carousel"
                    style={{ marginTop: "20px" }}
                    // data-interval="200"
                  >
                    <div className="carousel-inner row w-100 mx-auto">
                      {numberOfNews.length > 0
                        ? numberOfNews.map((
                            _item,
                            _index // Note: single line expression, so impilicit;y return our ItemComponent
                          ) => (
                            <div
                              className={carouselCardClass[_index]}
                              // className={classnames(
                              //   "carousel-item col-md-4",
                              //   {}
                              // )}
                              // className="carousel-item col-md-4 active"
                              name={numberOfNews[_index].title}
                              key={numberOfNews[_index].title}
                            >
                              <div className="card">
                                <img
                                  className="card-img-top img-fluid"
                                  src={
                                    numberOfNews[_index].multimedia.length > 4
                                      ? numberOfNews[_index].multimedia[4].url
                                      : ""
                                  }
                                  alt="Card image cap"
                                />
                                <div className="card-body">
                                  <h4 className="card-title text-dark">
                                    {numberOfNews[_index].title}
                                  </h4>
                                  <p className="card-text text-dark">
                                    {numberOfNews[_index].abstract}
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      {numberOfNews[_index].item_type}{" "}
                                      {numberOfNews[_index].byline}
                                      {/* Last updated{" "}
                                      {numberOfNews[
                                        _index
                                      ].updated_date.toLocaleDateString()}{" "}
                                      ago */}
                                    </small>
                                  </p>
                                  <a
                                    href={numberOfNews[_index].url}
                                    target="_blank"
                                  >
                                    Read full story
                                  </a>
                                  <p className="card-text">
                                    <small className="text-muted">
                                      Copyright (c) {new Date().getFullYear()}{" "}
                                      The New York Times Company. All Rights
                                      Reserved.
                                    </small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="newsCardResult">
          <div className="newsCardResult-inner ">
            <div className="container">
              <div className="row">
                <div className=" mx-5 text-dark">
                  <div className="alert alert-success alert-dismissible">
                    <strong>{this.props.showWeatherResult.error}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        //   <SweetAlert title="Here's a message!" onConfirm={this.onConfirm}>
        //     {this.props.showWeatherResult.resData.error.message}
        //   </SweetAlert>
      );
    }
  }
}

export default NewsCard;
