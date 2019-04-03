import React, { Component } from "react";

class JobsCard extends Component {
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
    var numberOfJobs = [];
    if (this.props.showJobsResult.resData != null) {
      // console.log("length " + this.props.showJobsResult.resData.length);
      this.props.showJobsResult.resData.map(function(data, idx) {
        const tempData = {
          url: data.url,
          company: data.company,
          title: data.title,
          type: data.type
        };
        numberOfJobs.push(tempData);
        //console.log("key " + idx + " data is " + data.idx);
        // return <p key={idx}>{data.name}</p>;
      });
    }

    if (numberOfJobs.length > 0) {
      return (
        <div className="newCardResult " name="news" key="news">
          <div className="newsCardResult-inner ">
            <div className="container  d-flex justify-content-center mx-5">
              <div className="row">
                {/* <h1 className="text-center mb-3">
                    Bootstrap Multi-Card Carousel
                  </h1> */}
                <div className="clearfix" />
                {numberOfJobs.length > 0
                  ? numberOfJobs.map((
                      _item,
                      _index // Note: single line expression, so impilicit;y return our ItemComponent
                    ) => (
                      <div
                        className="card w-75  d-flex justify-content-center mx-5 jobsCard"
                        name={numberOfJobs[_index].title}
                        key={numberOfJobs[_index].title}
                      >
                        <div className="card-body">
                          <h4
                            className="card-title "
                            style={{ color: "#1D80BE" }}
                          >
                            <a
                              href={numberOfJobs[_index].url}
                              target="blank"
                              className="card-link"
                            >
                              {numberOfJobs[_index].title}
                            </a>
                          </h4>
                          <span style={{ color: "grey" }}>
                            {numberOfJobs[_index].company}
                          </span>{" "}
                          <span className="text-dark">&ndash;</span>{" "}
                          <span style={{ color: "#1D9A00" }}>
                            {numberOfJobs[_index].type}
                          </span>
                        </div>
                      </div>
                    ))
                  : ""}
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
                    <strong>No Data Found!</strong>
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

export default JobsCard;
