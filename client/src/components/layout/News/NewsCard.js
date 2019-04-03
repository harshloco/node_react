import React, { Component } from "react";

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
    var numberOfNews = [];
    if (this.props.showNewsResult.resData != null) {
      var k = 0;

      var carouselCardClass = [];
      for (k; k < this.props.showNewsResult.resData.results.length; k++) {
        if (k === 3) {
          carouselCardClass.push("carousel-item col-md-4 active");
        } else {
          carouselCardClass.push("carousel-item col-md-4 ");
        }

        numberOfNews.push(this.props.showNewsResult.resData.results[k]);
      }
    }
    // console.log("result is **** " + this.props.showNewsResult.section);
    if (this.props.showNewsResult.resData.status.length > 0) {
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
                                    target="blank"
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
              <div className="row d-flex justify-content-center">
                <div className=" mx-5 text-dark">
                  <div className="alert alert-success alert-dismissible">
                    <strong>
                      {this.props.showNewsResult.resData.fault.faultstring}
                    </strong>
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

export default NewsCard;
